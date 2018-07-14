import css from 'styled-jsx/css';
import { fonts } from '../../tokens';

export default css`
    .hello {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
    }

    .hello__title {
        font-family: ${fonts.mark.family};
        font-weight: ${fonts.mark.weight.bold};
        font-size: 8rem;
        margin-bottom: 0;
        margin-top: 0;
    }
`;
