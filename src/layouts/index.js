import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { I18nProvider } from '@lingui/react'

import { catalogs, langFromPath } from '../i18n-config'
import { fonts } from '../tokens'

const TemplateWrapper = ({ children, lang, data }) => (
  <Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
      ]}
      link={[
        {
          rel: 'preload',
          href:
            '/fonts/markwebpro-bold-w01-regular/markwebpro-bold-w01-regular.woff2',
          as: 'font',
        },
      ]}
    />

    <style jsx global>{`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      body {
        background-color: #fff;
        margin: 0;
        padding: 0;
      }

      @font-face {
        font-family: ${fonts.mark.name};
        font-weight: ${fonts.mark.weight.bold};
        src: url(/fonts/markwebpro-bold-w01-regular/markwebpro-bold-w01-regular.woff)
            format('woff'),
          url(/fonts/markwebpro-bold-w01-regular/markwebpro-bold-w01-regular.woff2)
            format('woff2');
      }
    `}</style>

    {children()}
  </Fragment>
)

export default class extends Component {
  render() {
    const { data } = this.props
    const lang = langFromPath(this.props.location.pathname)

    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <TemplateWrapper {...this.props} lang={lang} data={data} />
      </I18nProvider>
    )
  }
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
