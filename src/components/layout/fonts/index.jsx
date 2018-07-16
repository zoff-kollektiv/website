import React from 'react'

import { fonts } from '../../../tokens'

const Fonts = () => (
  <style jsx global>{`
    @font-face {
      font-family: ${fonts.mark.name};
      font-weight: ${fonts.mark.weight.bold};
      src: url(/fonts/markwebpro-bold-w01-regular/markwebpro-bold-w01-regular.woff)
          format('woff'),
        url(/fonts/markwebpro-bold-w01-regular/markwebpro-bold-w01-regular.woff2)
          format('woff2');
    }
  `}</style>
)

export default Fonts
