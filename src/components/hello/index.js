import React from "react";

import styles from "./styles";

export default ({ title, image }) => (
  <section className="hello">
    <style jsx>{styles}</style>
    <img alt="Zoff" {...image} className="hello__image" />
    <h1 className="hello__title">{title}</h1>
  </section>
);
