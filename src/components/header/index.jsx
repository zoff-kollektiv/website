import Link from "gatsby-link";
import React from "react";

import style, { navItemStyles, logoStyles } from './style';

const Header = ({ logo = true }) => (
  <header className="header">
    <style jsx>{style}</style>
    {navItemStyles.styles}
    {logoStyles.styles}

    {logo && (
      <Link to={"/"} className={logoStyles.className}>
        <strong>Zoff</strong>
      </Link>
    )}

    <nav>
      <Link to={"/wer/"} className={navItemStyles.className}>
        Wer
      </Link>
    </nav>
  </header>
);

export default Header;
