import css from "styled-jsx/css";
import { graphql } from "gatsby";
import React from "react";

import Header from "../components/header";
import Person from "../components/person";
import What from "../components/what";
import withLayout from "../components/with-layout";

import { mq } from "../tokens";

const style = css`
  .persons-container {
    margin-top: -2rem;
  }

  @media ${mq.tabletLandscape} {
    .persons-container {
      margin-top: -7rem;
    }
  }
`;

const findImageByName = (name, images) =>
  images.find(image => image.node.name === name);

export default withLayout(({ data: { images: { edges: images } } }) => (
  <>
    <style jsx>{style}</style>

    <Header />

    <What
      theme="white"
      small={true}
      paragraphs={[
        `
        Wir existieren als kollektiver Betrieb seit 2019. Während sich Laura
        und Susanne zuvor bereits in Bildargumente - Studio für Gestaltung zusammentaten, wirkte
        Pierre gestalterisch als Teil von Ça ira! und Gustav war journalistisch
        im jib collective unterwegs. Im Rahmen der Lausitzer Straße trafen wir
        alle aufeinander.
        `
      ]}
    />

    <What
      theme="red"
      small={true}
      paragraphs={[
        `
        Als Kollektiv arbeiten wir nicht für,
        sondern mit Menschen – auf Augenhöhe. Wir setzen
        auf Zusammenarbeit und verstehen unsere Arbeit nicht als Dienstleistung.
        Was uns antreibt ist die Vision, dass radikaler gesellschaftlicher
        Wandel möglich ist. Uns interessiert dabei vor allem die soziale
        Funktion unserer Produkte.
        `
      ]}
    />

    <div className="persons-container">
      <Person
        name="Laura Maikowski"
        role="Konzept &amp; Gestaltung"
        email="laura@zoff-kollektiv.net"
        description=""
        image={findImageByName("laura-maikowski", images)}
      />

      <Person
        name="Susanne Beer"
        role="Konzept &amp; Gestaltung"
        email="susanne@zoff-kollektiv.net"
        description=""
        direction="rtl"
        image={findImageByName("susanne-beer", images)}
      />

      <Person
        name="Pierre Maite"
        role="Konzept &amp; Gestaltung"
        email="pierre@zoff-kollektiv.net"
        description=""
        image={findImageByName("pierre-maite", images)}
      />

      <Person
        name="Gustav Pursche"
        role="Konzept &amp; Programmierung"
        email="gustav@zoff-kollektiv.net"
        description=""
        direction="rtl"
        image={findImageByName("gustav-pursche", images)}
      />
    </div>
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

    images: allFile(filter: { sourceInstanceName: { eq: "images-persons" } }) {
      edges {
        node {
          name
          image: childImageSharp {
            fluid(maxWidth: 1280) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
