import Helmet from 'react-helmet';
import React from 'react';

import i18n from '../components/i18n';
import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
      ]}
    />
    {children()}
  </div>
);

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
