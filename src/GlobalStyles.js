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

         /* Rose */
        --color-secondary-50: #fff1f2;
        --color-secondary-100: #ffe4e6;
        --color-secondary-200: #fecdd3;
        --color-secondary-300: #fda4af;
        --color-secondary-400: #fb7185;
        --color-secondary-500: #f43f5e;
        --color-secondary-600: #e11d48;
        --color-secondary-700: #be123c;
        --color-secondary-800: #9f1239;
        --color-secondary-900: #881337;
        --color-secondary-950: #4c0519;

        /* Gradient */
        --color-gradient-bg: hsla(0, 100%, 50%, 1);
        --color-gradient-mesh: radial-gradient(
            at 40% 20%,
            hsla(28, 100%, 74%, 1) 0px,
            transparent 50%
            ),
            radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
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


    input,
    select {
        background-color: var(--color-gray-0);
        color: var(--color-gray-700);
        border: 1px solid var(--color-gray-400);
        border-radius: 4px;
        padding: 1rem;

        &:focus {
            outline: 1px solid var(--color-primary-400);
        }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
`;

export default GlobalStyles;
