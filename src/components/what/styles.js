import css from 'styled-jsx/css'

import { colors, fonts, mq } from '../../tokens'

export default css`
  .what {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .what__paragraph {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 1.8rem;
    line-height: 1.3;
    margin: 0 2.5rem;
    width: 100%;
  }

  @media ${mq.tabletLandscape} {
    .what__paragraph {
      font-size: 2.4rem;
      margin-left: 4rem;
      margin-right: 4rem;
      max-width: 1000px;
    }
  }
`
