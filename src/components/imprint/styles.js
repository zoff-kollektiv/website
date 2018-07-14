import css from 'styled-jsx/css'

export default css`
  .imprint {
    align-items: center;
    display: flex;
    flex-direction: column;
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
`
