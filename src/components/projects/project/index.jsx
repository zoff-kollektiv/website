import classnames from "classnames";
import React from "react";

import style from "./style";

export default ({
  title,
  description,
  year,
  customer,
  layout,
  images = [],
  link
}) => (
  <div
    className={classnames(
      "project",
      {
        "project--layout-2-column": layout === "2-column"
      },
      {
        "project--layout-2-column-reversed": layout === "2-column-reversed"
      },
      {
        "project--layout-3-column": layout === "3-column"
      },
      {
        "project--layout-poster": layout === "poster"
      }
    )}
  >
    <style jsx>{style}</style>

    <div className="image-container">
      {images.map(image => (
        <img {...image} className="image" />
      ))}
    </div>

    <div className="content-container">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>

      {year && customer && (
        <>
          {link ? (
            <a href={link} className="meta">
              {year}, {customer}
            </a>
          ) : (
            <p className="meta">
              {year}, {customer}
            </p>
          )}
        </>
      )}
    </div>
  </div>
);
