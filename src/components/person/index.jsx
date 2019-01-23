import React from "react";

import style from "./style";

export default ({ name, description, email, direction = "ltr", image, role }) => (
  <div className={`person direction-${direction}`}>
    <style jsx>{style}</style>

    <figure className="image-container">
      <img {...image.node.image.fluid} />
    </figure>

    <div className="content">
      <h2 className="title">
        {name}
        <small className="role">{role}</small>
      </h2>
      <p>{description}</p>
      <a href={email} className="email">
        {email}
      </a>
    </div>
  </div>
);
