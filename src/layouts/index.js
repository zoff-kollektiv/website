import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { I18nProvider } from '@lingui/react'
import Header from '../components/Header'
import { catalogs, langFromPath } from '../i18n-config'

const TemplateWrapper = ({ children, lang }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header lang={lang} />

    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default class extends React.Component {
  render() {
    const lang = langFromPath(this.props.location.pathname);

    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <TemplateWrapper {...this.props} lang={lang} />
      </I18nProvider>
    )
  }
}
