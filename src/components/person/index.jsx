import React from 'react';

import style from './style';

export default ({ name, description, email, direction = 'ltr', imageSrc }) => (
  <div className={`person direction-${direction}`}>
    <style jsx>{style}</style>

    <figure className="image-container">
      <img src={imageSrc} alt="" />
    </figure>

    <div className="content">
      <h2 className="title">{name}</h2>
      <p>{description}</p>
      <a href={email} className="email">{email}</a>
    </div>
  </div>
);
