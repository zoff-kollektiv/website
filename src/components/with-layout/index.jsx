import React from "react";
import Helmet from "react-helmet";
import { I18nProvider } from "@lingui/react";

import Fonts from "./fonts";
import ResetStyles from "./reset-styles";

import { catalogs } from "../../i18n-config";

export default Content => props => {
  const { data } = props;

  return (
    <I18nProvider language="de" catalogs={catalogs}>
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
    </I18nProvider>
  );
};
