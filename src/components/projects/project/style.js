import css from "styled-jsx/css";

import { colors, fonts } from "../../../tokens";

export default css`
  .project {
    color: ${colors.red};
    display: flex;
    flex-direction: column;
  }

  .project--layout-2-column {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .content-container {
    width: 50%;
  }

  .image-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
  }

  .image {
    object-fit: contain;
  }

  .image + .image {
    margin-left: 1.5rem;
  }

  .project--layout-poster .content-container,
  .project--layout-3-column .content-container {
    align-self: flex-end;
    margin-left: auto;
  }

  .project--layout-poster .content-container {
    margin-top: -1.5rem;
  }

  .project--layout-3-column .content-container {
    margin-top: 4rem;
  }

  .project--layout-3-column .image:nth-child(1) {
    width: 20%;
  }

  .project--layout-3-column .image:nth-child(2) {
    width: 50%;
  }

  .project--layout-3-column .image:nth-child(3) {
    width: 30%;
  }

  .project--layout-2-column .image-container {
    width: 40%;
  }

  .project--layout-2-column .content-container {
    order: -1;
    margin-right: 1.5rem;
    width: 60%;
  }

  .project--layout-poster .image {
    width: 30%;
  }

  .project--layout-poster .image:first-child {
    width: 40%;
  }

  .title {
    font-family: ${fonts.mark.family};
    font-size: 2rem;
    font-weight: ${fonts.mark.weight.bold};
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .description {
    font-family: ${fonts.mark.family};
    font-size: 1.5rem;
    font-weight: ${fonts.mark.weight.bold};
    line-height: 1.33;
  }

  .meta {
    font-family: ${fonts.mark.family};
    font-size: 1.5rem;
    font-weight: ${fonts.mark.weight.bold};
    text-decoration: underline;
  }
`;
