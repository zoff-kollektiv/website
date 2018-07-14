import React from 'react';
import Link from 'gatsby-link';
import { Trans, withI18n } from '@lingui/react';

import { defaultLanguage } from '../../i18n-config'

const Lang = ({ lang, selected }) => (
  <Link to={lang === defaultLanguage ? '/' : `/${lang}/`}>{lang}</Link>
)

const Header = props => (
  <div>
    <div>
      <h1>
        <Trans>Zoff collective</Trans>
      </h1>

      <Lang lang="de" selected={props.lang === 'de'} />
      <Lang lang="en" selected={props.lang === 'en'} />
    </div>
  </div>
)

export default withI18n()(Header);
