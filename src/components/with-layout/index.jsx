import React from "react";
import Helmet from "react-helmet";

import Fonts from "./fonts";
import ResetStyles from "./reset-styles";

export default Content => props => {
  const { data } = props;

  return (
    <>
      <Helmet
        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: "description",
            content: data.site.siteMetadata.description
          }
        ]}
        link={[
          {
            rel: "preload",
            href:
              "/fonts/markwebpro-bold-w01-regular/markwebpro-bold-w01-regular.woff2",
            as: "font"
          }
        ]}
      />

      <Fonts />
      <ResetStyles />

      <Content {...props} />
    </>
  );
};
