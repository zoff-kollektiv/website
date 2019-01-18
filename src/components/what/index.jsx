import React from "react";

import styles from "./styles";

const What = ({ paragraphs, theme = "white", small = false }) => (
  <section className={`what what--size-${small ? 'small' : 'big'} what--theme-${theme}`}>
    <style jsx>{styles}</style>
    {paragraphs.map(_ => (
      <p key={_} className="what__paragraph">
        {_}
      </p>
    ))}
  </section>
);

export default What;
