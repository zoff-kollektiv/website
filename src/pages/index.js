import React, { Fragment } from 'react'

import Hello from '../components/hello'
import Imprint from '../components/imprint'
import Principles from '../components/principles'
import What from '../components/what'

export default ({ data }) => (
  <Fragment>
    <Hello title="Zoff" />
    <What
      paragraphs={[
        `
          Zoff ist ein berliner Kollektiv, welches visuelle Kommunikationswerkzeuge
          im Kontext von politischen, sozialen, kulturellen und Bildungsprojekten
          entwickelt.
        `,
      ]}
    />

    <What
      theme="red"
      paragraphs={[
        `
          Was uns interessiert, ist die soziale Nutzung von Bildern.
        `,
      ]}
      moreHref="/"
      moreLabel="Case studies pdf laden"
    />

    <Principles edges={data.allMarkdownRemark.edges} />

    <Imprint email={data.site.siteMetadata.email} />
  </Fragment>
)

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(limit: 6, sort: { fields: [frontmatter___index] }) {
      ...principles
    }

    site {
      siteMetadata {
        email
      }
    }
  }
`
