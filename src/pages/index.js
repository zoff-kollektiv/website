import { graphql } from "gatsby";
import Helmet from "react-helmet";
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
      <Helmet title={site.siteMetadata.title} titleTemplate="">
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>

      <Header logo={false} />

      <Hello title="Zoff" image={imageHeader.image.fluid} />

      <What
        theme="red"
        paragraphs={[
          `
          Zoff ist ein Kollektiv für visuelle Kommunikation. Wir arbeiten an der
          Schnittstelle zwischen Design, Kunst und Politik. Gemeinsam konzipieren,
          gestalten und programmieren wir Webseiten, entwickeln Kampagnen,
          Publikationen und Ausstellungen.
          `
        ]}
      />

      <Projects
        title="Was wir tun"
        items={[
          {
            title: "About United Poster",
            description: `In gemeinsamen Fotoshootings und Textworkshops mit inspirierenden Aktivist*innen & Initiativen haben wir die diesjährige Plakatkampagne für about:united entwickelt.
Während der öffentliche Mainstream-Diskurs immer mehr von Rassismus geprägt ist, setzen sie sich dem rassistischen Diskurs entgegen und erzählen von ihren Erfahrungen, Kämpfen, Ängsten und Hoffnungen.
Die Soliparty im Berliner Club ://about blank unterstützt antirassistische Projekte.`,
            images: [
              findImageByNameAndSize("about-united-2019-3", 800, images).fluid,
              findImageByNameAndSize("about-united-2019-2", 600, images).fluid,
              findImageByNameAndSize("about-united-2019-1", 600, images).fluid
            ],
            year: 2019,
            customer: "://about blank",
            layout: "poster"
          },

          {
            title: "Romarchive",
            description: `Sinti und Roma schreiben mit dem Digitalen Archiv die europäische Kunstgeschichte neu. Erstmals wird damit ihr Beitrag zu Kunst und Kultur international zugänglich. Mit dem Team der KuratorInnen aus 15 Ländern haben wir die Gestaltung entwickelt.`,
            layout: "2-column",
            images: [findImageByNameAndSize("romarchive-1", 600, images).fluid],
            year: 2019,
            customer: "RomArchive"
          },

          {
            title: "Was geht bei euch?",
            description: `Sex, Nähe-Distanz, Freiräume, Gesprächskultur. Wie sehen erfüllende, gewaltlose Liebesbeziehungen für Jugendliche aus? Mit dem ‚bff – Frauen gegen Gewalt‘ gehen wir der richtigen Love-Life Balance auf die Spur. In der Kampagne, die über Plakate und Clips funktioniert, werden Fragen aufgeworfen: Was ist guter Sex? Wie viel Nähe brauchst Du? Soll ein Paar über alles reden?`,
            year: 2018,
            customer: "bff – Frauen gegen Gewalt",
            layout: "3-column",
            images: [
              findImageByNameAndSize("bff-1", 800, images).fluid,
              findImageByNameAndSize("bff-2", 400, images).fluid,
              findImageByNameAndSize("bff-3", 400, images).fluid
            ]
          },

          {
            title: "Europe's Far Right",
            description: `Agenda, Strategie und Netzwerke der Rechtspopulisten in Europa dokumentiert die Tageszeitung taz im Rechercherverbund Europe's Far Right. Mit dabei sind Libération (Paris), Falter (Wien), Gazeta Wyborcza (Warschau), HVG (Budapest) und Internazionale (Rom). Für dieses Projekt haben wir einen visuellen Storytelling-Editor entwickelt und gestaltet.`,
            year: 2018,
            customer: "taz - die tageszeitung",
            layout: "2-column",
            images: [findImageByNameAndSize("efr-1", 600, images).fluid]
          },

          {
            title: "This is not an Atlas",
            description: `Wir freuen uns, dass die von uns gestaltete und mitentwickelte Monitoring Platform watchthemed.net, die die Aktivitäten des alarmphone.org – eine Hotline für Geflüchtete auf dem Mittelmeer – in der Publikation „This is not an Atlas“ veröffentlicht wurde.`,
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
