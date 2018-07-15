import React, { Fragment } from 'react'

import Hello from '../components/hello'
import Imprint from '../components/imprint'
import Principles from '../components/principles'
import What from '../components/what'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Fragment>
      <Hello title="Zoff" />
      <What
        paragraphs={[
          'Zoff ist ein berliner Kollektiv, welches visuelle Kommunikationswerkzeuge im Kontext von politischen, sozialen, kulturellen und Bildungsprojekten entwickelt.',
        ]}
      />
      <Principles edges={allMarkdownRemark.edges} />
      <Imprint />
    </Fragment>
  )
}

export const projectQuery = graphql`
  query allPrinciples {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___index] }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default IndexPage
