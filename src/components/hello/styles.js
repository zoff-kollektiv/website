import css from "styled-jsx/css";
import { fonts, mq, colors } from "../../tokens";

export default css`
  .hello {
    background-color: black;
    font-size: 0;
    overflow: hidden;
    line-height: 1;
    position: relative;
  }

  @media ${mq.tabletLandscape} {
    .hello {
      height: 100vh;
    }
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

  @media ${mq.tabletLandscape} {
    .hello__title {
      font-size: 17rem;
    }
  }

  .hello__image {
    font-size: 0;
    height: 100%;
    line-height: 1;
    min-width: 100%;
  }

  @media ${mq.tabletLandscape} {
    .hello__image {
      height: auto;
      width: 100%;
    }
  }
`;
