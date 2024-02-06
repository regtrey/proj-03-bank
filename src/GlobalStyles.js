import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {}

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }
`;

export default GlobalStyles;
