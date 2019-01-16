import Link from "gatsby-link";
import React from "react";

import styles from "./styles";

const What = ({ paragraphs, theme = "white" }) => (
  <section className={`what what--theme-${theme}`}>
    <style jsx>{styles}</style>
    {paragraphs.map(_ => (
      <p key={_} className="what__paragraph">
        {_}
      </p>
    ))}
  </section>
);

export default What;
