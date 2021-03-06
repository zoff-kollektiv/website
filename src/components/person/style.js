import css from "styled-jsx/css";

import { colors, fonts, mq } from "../../tokens";

export default css`
  .person {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  @media ${mq.tabletLandscape} {
    .person {
      padding-bottom: 3.5rem;
      padding-top: 3.5rem;
    }
  }

  .content {
    padding: 1rem;
    width: 50%;
  }

  @media ${mq.tabletLandscape} {
    .content {
      padding: 2rem;
    }
  }

  .direction-rtl .content {
    order: -1;
  }

  .image-container {
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    flex: 1;
    margin: 0;
  }

  img {
    align-self: flex-start;
    max-width: 100%;
    object-fit: contain;
  }

  @media ${mq.tabletLandscape} {
    .direction-rtl .image-container {
      justify-content: flex-end;
    }
  }

  .title {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 1.5rem;
    font-weight: ${fonts.mark.weight.black};
    line-height: 1.2;
    margin-top: 1rem;
  }

  @media ${mq.tabletLandscape} {
    .title {
      font-size: 2rem;
      margin-top: 4rem;
    }
  }

  .role {
    display: block;
    font-size: 1rem;
    font-weight: ${fonts.mark.weight.medium};
  }

  @media ${mq.tabletLandscape} {
    .role {
      font-size: 1.5rem;
    }
  }

  p {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 1.25rem;
    font-weight: ${fonts.mark.weight.bold};
    margin-bottom: 2rem;
  }

  @media ${mq.tabletLandscape} {
    p {
      font-size: 1.5rem;
      margin-bottom: 4rem;
    }
  }

  .email {
    color: ${colors.red};
    font-family: ${fonts.mark.family};
    font-size: 0.8rem;
    font-weight: ${fonts.mark.weight.bold};
    white-space: nowrap;
  }

  @media ${mq.tabletLandscape} {
    .email {
      font-size: 1.5rem;
    }
  }
`;
