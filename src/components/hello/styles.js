import css from 'styled-jsx/css'
import { fonts, mq, colors } from '../../tokens'

export default css`
  .hello {
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .hello__title {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-weight: ${fonts.mark.weight.bold};
    font-size: 5rem;
    left: 50%;
    margin-bottom: 0;
    margin-top: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .hello__image {
    width: 100%;
  }

  @media ${mq.mobile} {
    .hello__title {
      font-size: 17rem;
    }
  }
`
