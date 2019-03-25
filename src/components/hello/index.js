import React from "react";

import styles from "./styles";

export default ({ title, image }) => (
  <section className="hello">
    <style jsx>{styles}</style>

    <picture className="hello__image">
      <source srcset={image.srcSetWebp} type="image/webp" />
      <source srcset={image.srcset} type="image/jpeg" />

      <img alt="Zoff" src={image.src} />
    </picture>

    <h1 className="hello__title">{title}</h1>
  </section>
);
