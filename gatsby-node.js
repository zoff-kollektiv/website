const path = require('path')

const { languages, defaultLanguage } = require('./src/i18n-config')

const createPrinciplesPage = (createPage, graphql) =>
  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/principles/${path.basename(node.fileAbsolutePath, '.md')}`,
        component: path.resolve('src/templates/principle/index.jsx'),
        context: {},
        layout: 'page',
      })
    })
  })

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return Promise.all([createPrinciplesPage(createPage, graphql)])
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise(resolve => {
    deletePage(page)

    languages.map(language => {
      let newPage = {
        ...page,
        ...{
          originalPath: page.path,
          path:
            language === defaultLanguage
              ? page.path
              : '/' + language + page.path,
          context: {
            lang: language,
          },
        },
      }

      createPage(newPage)
    })

    resolve()
  })
}
