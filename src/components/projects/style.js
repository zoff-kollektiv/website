import css from "styled-jsx/css";

import { colors, fonts } from "../../tokens";

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 3rem 1.5rem;
  }

  .title {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 1.625rem;
    font-weight: ${fonts.mark.weight.bold};
    margin-bottom: 5rem;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    max-width: 1000px;
    padding-left: 0;
  }

  li + li {
    margin-top: 8rem;
  }
`;
