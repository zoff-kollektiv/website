import Link from 'gatsby-link'
import React from 'react'

import Principle from './principle'
import styles from './styles'

export default ({ edges, showAll = false }) => {
  return (
    <section className="principles">
      <style jsx>{styles}</style>

      <h2 className="principles__title">Prinzipien</h2>

      <ul className="principles__list">
        {edges &&
          edges.map((_, index) => {
            return (
              <li
                key={_.node.frontmatter.title}
                className="principles__list-item"
              >
                <Principle index={index + 1} {..._.node.frontmatter} />
              </li>
            )
          })}
      </ul>

      {showAll && (
        <span className="principles__more">
          <Link to={'/principles/'}>Mehr über unsere Arbeitsprinzipien</Link>
        </span>
      )}
    </section>
  )
}
