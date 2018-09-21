import Link from 'gatsby-link'
import React from 'react'

import styles from './styles'

const What = ({ paragraphs, theme = 'white', moreHref, moreLabel }) => (
  <section className={`what what--theme-${theme}`}>
    <style jsx>{styles}</style>
    {paragraphs.map(_ => (
      <p key={_} className="what__paragraph">
        {_}
      </p>
    ))}
    <span className="what__more">
      <Link to={moreHref}>{moreLabel}</Link>
    </span>,
  </section>
)

export default What
