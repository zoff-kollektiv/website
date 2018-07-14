import React from 'react';
import Link from 'gatsby-link';
import { withI18n } from '@lingui/react';

const Hello = ({ title }) => (
  <header className="hello">
    <style jsx>{`
      .hello {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
      }

      .hello__title {
        font-size: 8rem;
        margin-bottom: 0;
        margin-top: 0;
      }
    `}</style>

    <h1 className="hello__title">
      {title}
    </h1>
  </header>
);

export default withI18n()(Hello);
