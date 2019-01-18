import { graphql } from "gatsby";
import React from "react";

import Header from '../components/header';
import Hello from "../components/hello";
import Imprint from "../components/imprint";
import What from "../components/what";
import withLayout from "../components/with-layout";

export default withLayout(({ data }) => (
  <>
    <Header logo={false} />

    <Hello title="Zoff" />

    <What
      theme="red"
      paragraphs={[
        `
          Zoff ist ein berliner Kollektiv, welches visuelle Kommunikationswerkzeuge
          im Kontext von politischen, sozialen, kulturellen und Bildungsprojekten
          entwickelt.
        `
      ]}
    />

    <Imprint email={data.site.siteMetadata.email} />
  </>
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
