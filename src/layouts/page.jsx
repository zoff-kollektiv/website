import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { I18nProvider } from '@lingui/react'

import { catalogs, langFromPath } from '../i18n-config'
import Header from '../components/header'
import Layout from '../components/layout'

const TemplateWrapper = ({ children, data }) => (
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

    <Layout>
      <Header />
      {children()}
    </Layout>
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
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
