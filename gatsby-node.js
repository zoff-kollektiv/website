const { languages, defaultLanguage } = require('./src/i18n-config')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

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
