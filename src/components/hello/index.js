import React from "react";
import { withI18n } from "@lingui/react";

import styles from "./styles";

import image1 from "./images/image-1.jpg";
import image1Mobile from "./images/image-1--mobile.jpg";

const Hello = ({ title, image }) => (
  <section className="hello">
    <style jsx>{styles}</style>
    <img
      {...image}
      className="hello__image"
    />
    <h1 className="hello__title">{title}</h1>
  </section>
);

export default withI18n()(Hello);
