import css from "styled-jsx/css";

import { fonts, colors, mq } from "../../tokens";

export default css`
  .imprint {
    color: ${colors.red};
    display: flex;
    flex-direction: column;
    font-family: ${fonts.mark.family};
    font-size: 1.3rem;
    font-style: normal;
    line-height: 1.4;
    padding: 10vh 1.5rem;
  }

  @media ${mq.tabletLandscape} {
    .imprint {
      align-items: center;
      font-size: 1.8rem;
      height: 100vh;
      justify-content: center;
      padding-bottom: 0;
      padding-top: 0;
    }
  }

  .imprint__line {
    display: block;
  }

  .imprint__link {
    color: currentColor;
    text-decoration: none;
  }

  .imprint__link:hover,
  .imprint__link:focus {
    text-decoration: underline;
  }
`;
