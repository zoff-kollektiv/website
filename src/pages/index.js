import React, { Component } from 'react';
import { translate } from "react-i18next";

import Hello from '../components/hello';

class HelloSection extends Component {
  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <button onClick={() => this.handleChangeLanguage('de')}>
          {t('german')}
        </button>

        <button onClick={() => this.handleChangeLanguage('en')}>
          {t('english')}
        </button>

        <Hello text={t('title')} />
      </div>
    );
  }
}

export default translate('hello')(HelloSection);
