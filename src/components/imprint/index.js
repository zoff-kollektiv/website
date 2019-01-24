import React from "react";

import styles from "./styles";

const Imprint = ({ email }) => (
  <address className="imprint" itemscope itemtype="http://schema.org/Organization">
    <style jsx>{styles}</style>

    <span className="imprint__line" itemprop="legalName">Zoff</span>

    <div itemprop="address">
      <span className="imprint__line">Lausitzer Straße 10</span>
      <span className="imprint__line">Aufgang D, 1. Stock</span>
      <span className="imprint__line">10999 Berlin</span>
    </div>

    <span className="imprint__line">
      <a href={`mailto:${email}`} className="imprint__link" itemprop="email">
        {email}
      </a>
    </span>
  </address>
);

export default Imprint;
