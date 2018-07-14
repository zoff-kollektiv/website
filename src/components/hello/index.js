import React from 'react';
import Link from 'gatsby-link';
import { withI18n } from '@lingui/react';

import styles from './styles';

const Hello = ({ title }) => (
  <header className="hello">
    <style jsx>{styles}</style>

    <h1 className="hello__title">
      {title}
    </h1>
  </header>
);

export default withI18n()(Hello);
