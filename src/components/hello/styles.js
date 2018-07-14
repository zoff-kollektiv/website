import css from 'styled-jsx/css'
import { fonts, mq } from '../../tokens'

export default css`
  .hello {
    align-items: center;
    background-color: red;
    display: flex;
    height: 100vh;
    justify-content: center;
  }

  .hello__title {
    font-family: ${fonts.mark.family};
    font-weight: ${fonts.mark.weight.bold};
    font-size: 4rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${mq.mobile} {
    .hello__title {
      font-size: 8rem;
    }
  }
`
