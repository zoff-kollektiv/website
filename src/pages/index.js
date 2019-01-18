import { graphql } from "gatsby";
import React, { Fragment } from "react";

import Hello from "../components/hello";
import Imprint from "../components/imprint";
import What from "../components/what";
import withLayout from "../components/with-layout";

export default withLayout(({ data }) => (
  <Fragment>
    <Hello title="Zoff" />

    <What
      paragraphs={[
        `
          Zoff ist ein berliner Kollektiv, welches visuelle Kommunikationswerkzeuge
          im Kontext von politischen, sozialen, kulturellen und Bildungsprojekten
          entwickelt.
        `
      ]}
    />

    <Imprint email={data.site.siteMetadata.email} />
  </Fragment>
));

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        email
        description
      }
    }
  }
`;
