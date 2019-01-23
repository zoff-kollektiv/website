import css from "styled-jsx/css";

import { colors, fonts, mq } from "../../../tokens";

export default css`
  .project {
    color: ${colors.red};
    display: flex;
    flex-direction: column;
  }

  .project--layout-2-column,
  .project--layout-2-column-reversed,
  .project--layout-3-column,
  .project--layout-poster {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-2-column-reversed,
    .project--layout-2-column {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  @media ${mq.tabletLandscape} {
    .content-container {
      width: 50%;
    }
  }

  .image-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
  }

  .image {
    height: auto;
    max-width: 100%;
    object-fit: contain;
    width: 100%;
  }

  .project--layout-poster .image + .image {
    margin-left: 0.25rem;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-poster .image + .image {
      margin-left: 1.5rem;
    }
  }

  .project--layout-2-column-reversed .image + .image,
  .project--layout-2-column .image + .image {
    margin-top: 0.5rem;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-2-column-reversed .image + .image,
    .project--layout-2-column .image + .image {
      margin-top: 1.5rem;
    }
  }

  .project--layout-poster .content-container,
  .project--layout-3-column .content-container {
    align-self: flex-end;
    margin-left: auto;
    margin-top: 1.5rem;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-poster .content-container,
    .project--layout-3-column .content-container {
      margin-top: 0;
    }
  }

  .project--layout-3-column .content-container,
  .project--layout-poster .content-container {
    margin: 1.5rem 1.5rem 0 1.5rem;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-poster .content-container {
      margin-top: -1.5rem;
    }
  }

  @media ${mq.tabletLandscape} {
    .project--layout-3-column .content-container {
      margin-top: -10.5rem;
    }
  }

  .project--layout-3-column .image:nth-child(1) {
    width: 50%;
  }

  .project--layout-3-column .image:nth-child(2) {
    margin-left: 0.25rem;
    width: 25%;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-3-column .image:nth-child(2) {
      margin-left: 1.5rem;
    }
  }

  .project--layout-3-column .image:nth-child(3) {
    margin-left: 0.25rem;
    width: 25%;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-3-column .image:nth-child(3) {
      margin-left: 12.5%;
      margin-top: 1.5rem;
    }
  }

  .project--layout-2-column-reversed .image-container,
    .project--layout-2-column .image-container {
      flex-direction: column;
    }

  @media ${mq.tabletLandscape} {
    .project--layout-2-column-reversed .image-container,
    .project--layout-2-column .image-container {
      width: 40%;
    }
  }

  @media ${mq.tabletLandscape} {
    .project--layout-2-column-reversed .image-container {
      margin-right: 4.5rem;
      order: -1;
    }
  }

  .project--layout-3-column .image-container {
    align-items: flex-end;
    justify-content: flex-start;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-3-column .image-container {
      align-items: center;
      flex-wrap: wrap;
      margin-left: -3rem;
    }
  }

  .project--layout-2-column-reversed .content-container,
  .project--layout-2-column .content-container {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 1.5rem;
  }

  @media ${mq.tabletLandscape} {
    .project--layout-2-column-reversed .content-container,
    .project--layout-2-column .content-container {
      order: -1;
      margin-left: 0;
      margin-right: 4.5rem;
      margin-top: 0;
      width: 60%;
    }
  }

  .project--layout-poster .image {
    width: 30%;
  }

  .project--layout-poster .image:first-child {
    width: 40%;
  }

  .title {
    font-family: ${fonts.mark.family};
    font-size: 1.5rem;
    font-weight: ${fonts.mark.weight.bold};
    margin-bottom: 1rem;
    margin-top: 0;
  }

  @media ${mq.tabletLandscape} {
    .title {
      font-size: 2rem;
    }
  }

  .description {
    font-family: ${fonts.mark.family};
    font-size: 1rem;
    font-weight: ${fonts.mark.weight.medium};
    line-height: 1.33;
  }

  @media ${mq.tabletLandscape} {
    .description {
      font-size: 1.5rem;
    }
  }

  .meta {
    font-family: ${fonts.mark.family};
    font-size: 1rem;
    font-weight: ${fonts.mark.weight.bold};
  }

  @media ${mq.tabletLandscape} {
    .meta {
      font-size: 1.5rem;
    }
  }
`;
