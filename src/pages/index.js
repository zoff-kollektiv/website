import React, { Fragment } from 'react'

import Hello from '../components/hello'
import Imprint from '../components/imprint'
import Principles from '../templates/principles'
import What from '../components/what'

const IndexPage = ({ data }) => (
  <Fragment>
    <Hello title="Zoff" />
    <What
      paragraphs={[
        'Zoff ist ein berliner Kollektiv, welches visuelle Kommunikationswerkzeuge im Kontext von politischen, sozialen, kulturellen und Bildungsprojekten entwickelt.',
      ]}
    />
    <Principles edges={data.allMarkdownRemark.edges} />
    <Imprint />
  </Fragment>
)

export const pageQuery = graphql`
  query AllPrinciples {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___index] }) {
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

export default IndexPage
