import React from 'react'

import Principle from './principle'
import styles from './styles'

const Principles = ({ edges }) => {
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
                <Principle
                  index={index + 1}
                  path={`/principles/${
                    /([a-z-]+).md$/.exec(_.node.fileAbsolutePath)[1]
                  }`}
                  {..._.node.frontmatter}
                />
              </li>
            )
          })}
      </ul>
    </section>
  )
}

export default Principles
