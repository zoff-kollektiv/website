import css from 'styled-jsx/css'

import { fonts } from '../../tokens'

export default css`
  .principles {
    align-items: center;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4rem;
    padding-top: 4rem;
  }

  .principles__title,
  .principles__more {
    color: white;
    font-family: ${fonts.mark.family};
    text-align: center;
    text-transform: uppercase;
  }

  .principles__title {
    margin-bottom: 4rem;
    margin-top: 0;
  }

  .principles__more {
    margin-bottom: 0;
    margin-top: 4rem;
  }

  .principles__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    max-width: 1100px;
    padding-left: 0;
  }

  .principles__list-item {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 50%;
  }

  .principles__list-item:nth-child(2n + 2) {
    margin-top: 8rem;
  }
`
