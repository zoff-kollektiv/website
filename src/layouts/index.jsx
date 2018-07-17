import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { I18nProvider } from '@lingui/react'

import { catalogs, langFromPath } from '../i18n-config'
import Layout from '../components/layout'

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
    />

    <Layout>{children()}</Layout>
  </Fragment>
)

export default class extends Component {
  render() {
    const { data } = this.props
    const lang = langFromPath(this.props.location.pathname)

    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <TemplateWrapper {...this.props} data={data} />
      </I18nProvider>
    )
  }
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
