import React from 'react'
import { withI18n } from '@lingui/react'

import styles from './styles'

import image1 from './images/image-1.jpg'
import image1Mobile from './images/image-1--mobile.jpg'

const Hello = ({ title }) => (
  <header className="hello">
    <style jsx>{styles}</style>
    <img
      src={image1}
      srcSet={`${image1Mobile} 400w, ${image1} 1000w `}
      className="hello__image"
      alt=""
    />
    <h1 className="hello__title">{title}</h1>
  </header>
)

export default withI18n()(Hello)
