import React, { Fragment } from 'react'

import Header from '../components/header'
import Principles from '../components/principles'

export default ({ data }) => (
  <Fragment>
    <Header />
    <Principles edges={data.allMarkdownRemark.edges} />
  </Fragment>
)

export const query = graphql`
  query AllPrinciplesPage {
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
