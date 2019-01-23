import React from "react";

import Project from "./project";

import style from "./style";

export default ({ items, title }) => (
  <section>
    <style jsx>{style}</style>

    <h2 className="title">{title}</h2>

    <ul>
      {items.map(project => (
        <li>
          <Project {...project} />
        </li>
      ))}
    </ul>
  </section>
);
