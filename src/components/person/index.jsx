import React from "react";

import style from "./style";

export default ({
  name,
  description,
  email,
  direction = "ltr",
  image,
  role
}) => (
  <div
    className={`person direction-${direction}`}
    itemscope
    itemtype="http://schema.org/Person"
  >
    <style jsx>{style}</style>

    <figure className="image-container">
      <img {...image.node.image.fluid} itemprop="image" />
    </figure>

    <div className="content">
      <h2 className="title">
        <span itemprop="givenName">{name}</span>
        <small className="role" itemprop="jobTitle">
          {role}
        </small>
      </h2>

      {description && <p itemprop="description">{description}</p>}

      <a href={`mailto:${email}`} className="email" itemprop="email">
        {email}
      </a>
    </div>
  </div>
);
