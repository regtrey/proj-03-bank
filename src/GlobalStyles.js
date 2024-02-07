import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /* Gray */
        --color-gray-0: #ffffff;
        --color-gray-50: #f9fafb;
        --color-gray-100: #f3f4f6;
        --color-gray-200: #e5e7eb;
        --color-gray-300: #d1d5db;
        --color-gray-400: #9ca3af;
        --color-gray-500: #6b7280;
        --color-gray-600: #4b5563;
        --color-gray-700: #374151;
        --color-gray-800: #1f2937;
        --color-gray-900: #111827;
        --color-gray-950: #030712;

        /* Teal */
        --color-primary-50: #f0fdfa;
        --color-primary-100: #ccfbf1;
        --color-primary-200: #99f6e4;
        --color-primary-300: #5eead4;
        --color-primary-400: #2dd4bf;
        --color-primary-500: #14b8a6;
        --color-primary-600: #0d9488;
        --color-primary-700: #0f766e;
        --color-primary-800: #115e59;
        --color-primary-900: #134e4a;
        --color-primary-950: #042f2e;
    }

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

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
