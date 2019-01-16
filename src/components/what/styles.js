import css from "styled-jsx/css";

import { colors, fonts, mq } from "../../tokens";

export default css`
  .what {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10vh 1.5rem;
  }

  @media ${mq.tabletLandscape} {
    .what {
      height: 100vh;
      padding-bottom: 0;
      padding-top: 0;
    }
  }

  .what--theme-red {
    background-color: ${colors.red};
  }

  .what__paragraph {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 1.3rem;
    line-height: 1.3;
    margin: 0 2.5rem;
    width: 100%;
  }

  @media ${mq.tabletLandscape} {
    .what__paragraph {
      font-size: 1.8rem;
    }
  }

  .what--theme-red .what__paragraph {
    color: white;
  }

  @media ${mq.tabletLandscape} {
    .what__paragraph {
      font-size: 2.4rem;
      margin-left: 4rem;
      margin-right: 4rem;
      max-width: 1000px;
    }
  }

  .what__more {
    color: white;
    font-family: ${fonts.mark.family};
    margin-bottom: 0;
    margin-top: 4rem;
    text-align: center;
    text-transform: uppercase;
  }
`;
