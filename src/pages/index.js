import { graphql } from "gatsby";
import React from "react";

import Header from "../components/header";
import Hello from "../components/hello";
import Imprint from "../components/imprint";
import Projects from "../components/projects";
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

    <Projects
      title="Was wir tun"
      items={[
        {
          title: "About United Poster",
          description: `Während der öffentliche Mainstream-diskurs immer mehr von
          Rassismus geprägt ist, kommen mit about united die Stimmen von Refugees
          zurück auf die Straße.`,
          images: [
            {
              src: "https://dummyimage.com/400x600/000/fff"
            },

            {
              src: "https://dummyimage.com/400x600/000/fff"
            },

            {
              src: "https://dummyimage.com/400x600/000/fff"
            }
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
          images: [
            {
              src: "https://dummyimage.com/600x400/000/fff"
            }
          ]
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
            {
              src: "https://dummyimage.com/600x400/000/fff"
            },

            {
              src: "https://dummyimage.com/600x400/000/fff"
            },

            {
              src: "https://dummyimage.com/600x400/000/fff"
            }
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
          images: [
            {
              src: "https://dummyimage.com/600x400/000/fff"
            }
          ]
        }
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
