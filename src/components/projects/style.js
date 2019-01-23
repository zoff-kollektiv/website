import css from "styled-jsx/css";

import { colors, fonts, mq } from "../../tokens";

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
    font-size: 1.5rem;
    font-weight: ${fonts.mark.weight.bold};
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  @media ${mq.tabletLandscape} {
    .title {
      font-size: 1.625rem;
      margin-bottom: 5rem;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    max-width: 1000px;
    padding-left: 0;
  }

  li + li {
    margin-top: 3rem;
  }

  @media ${mq.tabletLandscape} {
    li + li {
      margin-top: 8rem;
    }
  }
`;
