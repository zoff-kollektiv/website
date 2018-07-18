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
        'Zoff ist ein berliner Kollektiv, welches visuelle Kommunikationswerkzeuge im Kontext von politischen, sozialen, kulturellen und Bildungsprojekten entwickelt.',
      ]}
    />
    <Principles edges={data.allMarkdownRemark.edges} showAll={true} />
    <Imprint />
  </Fragment>
)

export const query = graphql`
  query AllPrinciplesIndex {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___index] }) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  }
`
