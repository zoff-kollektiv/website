import React from 'react'

import styles from './styles'

const Imprint = () => (
  <address className="imprint">
    <style jsx>{styles}</style>

    <span className="imprint__line">Zoff</span>
    <span className="imprint__line">Lausitzer Straße 10</span>
    <span className="imprint__line">10999 Berlin</span>
    <span className="imprint__line">
      <a href="mailto:kontakt@zoff-kollektiv.net" className="imprint__link">
        kontakt@zoff-kollektiv.net
      </a>
    </span>
  </address>
)

export default Imprint
