import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1rem;
        background: ${(props) => props.theme.colors.secondaryGradient};
        color: ${(props) => props.theme.colors.secondary};
    }
`;

export default GlobalStyles;
