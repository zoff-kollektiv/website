import Helmet from "react-helmet";
import React, { Fragment } from "react";

import Fonts from "./fonts";
import ResetStyles from "./reset-styles";

const Layout = ({ children }) => (
  <Fragment>
    <Helmet
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
    {children}
  </Fragment>
);

export default Layout;
