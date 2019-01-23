import { graphql } from "gatsby";
import React from "react";

import Header from "../components/header";
import Hello from "../components/hello";
import Imprint from "../components/imprint";
import Projects from "../components/projects";
import What from "../components/what";
import withLayout from "../components/with-layout";

const findImageByNameAndSize = (name, size, images) =>
  images
    .map(image => (image.node.name === name ? image.node[`size${size}`] : null))
    .filter(Boolean)[0];

export default withLayout(
  ({
    data: {
      site,
      imagesProjects: { edges: images },
      imageHeader
    }
  }) => (
    <>
      <Header logo={false} />

      <Hello title="Zoff" image={imageHeader.image.fluid} />

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

      <Projects
        title="Was wir tun"
        items={[
          {
            title: "About United Poster",
            description: `Während der öffentliche Mainstream-diskurs immer mehr von
          Rassismus geprägt ist, kommen mit about united die Stimmen von Refugees
          zurück auf die Straße.`,
            images: [
              findImageByNameAndSize("about-united-2019-3", 800, images).fluid,
              findImageByNameAndSize("about-united-2019-2", 600, images).fluid,
              findImageByNameAndSize("about-united-2019-1", 600, images).fluid
            ],
            year: 2019,
            customer: "about blank",
            layout: "poster"
          },

          {
            title: "Romarchive.eu",
            description: `Während der öffentliche Mainstream-diskurs immer mehr von
        Rassismus geprägt ist, kommen mit about united die Stimmen von Refugees
        zurück auf die Straße.`,
            layout: "2-column",
            images: [findImageByNameAndSize("romarchive-1", 600, images).fluid]
          },

          {
            title: "Was geht bei euch?",
            description: `Während der öffentliche Mainstream-diskurs immer mehr von
        Rassismus geprägt ist, kommen mit about united die Stimmen von Refugees
        zurück auf die Straße.`,
            year: 2018,
            customer:
              "Bundesverband Frauenberatungsstellen und Frauennotrufe (BFF)",
            layout: "3-column",
            images: [
              findImageByNameAndSize("bff-1", 800, images).fluid,
              findImageByNameAndSize("bff-2", 400, images).fluid,
              findImageByNameAndSize("bff-3", 400, images).fluid
            ]
          },

          {
            title: "Europes Far Right",
            description: `Während der öffentliche Mainstream-diskurs immer mehr von
        Rassismus geprägt ist, kommen mit about united die Stimmen von Refugees
        zurück auf die Straße.`,
            year: 2018,
            customer: "taz - die tageszeitung",
            layout: "2-column",
            images: [findImageByNameAndSize("efr-1", 600, images).fluid]
          },

          {
            title: "This is not an Atlas",
            description: ` Wir freuen uns dass die von uns gestaltete und
          mitentwickelte Monitoring Platform watchthemed.net, die die Aktivitäten
          des alarmphone.org (eine Hotline für Geflüchtete auf dem Mittelmeer)
          verzeichnet – in der Publikation „This is not an Atlas“ veröffentlicht
          wurde.`,
            year: 2018,
            customer: "Kollektiv Orangotango (Hrsg.)",
            layout: "2-column-reversed",
            images: [
              findImageByNameAndSize("watch-the-med-1", 600, images).fluid,
              findImageByNameAndSize("watch-the-med-2", 600, images).fluid
            ]
          }
        ]}
      />

      <Imprint email={site.siteMetadata.email} />
    </>
  )
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        email
        description
      }
    }

    imageHeader: file(sourceInstanceName: { eq: "images-header" }) {
      name
      image: childImageSharp {
        fluid(maxWidth: 1280) {
          src
          srcSet
        }
      }
    }

    imagesProjects: allFile(
      filter: { sourceInstanceName: { eq: "images-projects" } }
    ) {
      edges {
        node {
          name

          size800: childImageSharp {
            fluid(maxWidth: 800) {
              src
              srcSet
            }
          }

          size600: childImageSharp {
            fluid(maxWidth: 600) {
              src
              srcSet
            }
          }

          size400: childImageSharp {
            fluid(maxWidth: 400) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
