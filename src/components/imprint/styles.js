import css from "styled-jsx/css";

import { fonts, colors } from "../../tokens";

export default css`
  .imprint {
    align-items: center;
    color: ${colors.red};
    display: flex;
    flex-direction: column;
    font-family: ${fonts.mark.family};
    font-size: 1.8rem;
    font-style: normal;
    height: 100vh;
    justify-content: center;
    line-height: 1.4;
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
