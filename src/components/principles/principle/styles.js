import css from 'styled-jsx/css'

import { fonts } from '../../../tokens';

export default css`
  .principle {
    color: white;
  }

  .principle__title-index {
    font-family: ${fonts.mark.family};
    font-size: 1.8rem;
  }

  .principle__title-index::before {
    content: '#';
    font-family: ${fonts.mark.family};
    margin-right: .2rem;
  }

  .principle__title-text {
    display: block;
    font-family: ${fonts.mark.family};
    font-size: 3rem;
    line-height: 1.2;
    margin-top: .75rem;
    text-decoration: underline;
  }
`
