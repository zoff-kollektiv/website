import css from "styled-jsx/css";
// eslint-disable-next-line no-unused-vars
import React from "react";

import { colors, fonts, mq } from "../../tokens";

export default css`
  header {
    display: flex;
    flex-direction: row;
    left: 0;
    margin: 0;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  nav {
    align-self: flex-end;
    margin-left: auto;
  }
`;

export const logoStyles = css.resolve`
  a {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 1.25rem;
    font-weight: ${fonts.mark.weight.bold};
  }

  @media ${mq.tabletLandscape} {
    a {
      font-size: 1.75rem;
    }
  }
`;

export const navItemStyles = css.resolve`
  a {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 1.25rem;
    font-weight: ${fonts.mark.weight.bold};
    text-decoration: none;
  }

  @media ${mq.tabletLandscape} {
    a {
      font-size: 1.75rem;
    }
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
