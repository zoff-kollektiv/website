import Link from 'gatsby-link'
import React from 'react'

import styles from './styles'

const Project = ({ title, index, path }) => (
  <div className="principle">
    <style jsx>{styles}</style>
    <h2 className="principle__title">
      <small className="principle__title-index">
        {index < 10 ? '0' + index : index}
      </small>

      <Link to={path}>
        <a className="principle__title-text">{title}</a>
      </Link>
    </h2>
  </div>
)

export default Project
