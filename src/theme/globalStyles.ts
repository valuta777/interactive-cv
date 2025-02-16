import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* Smooth Scrolling */
    html {
        scroll-behavior: smooth;
    }

    /* Hide Scrollbar Arrows (for Windows browsers) */
    /* Chrome, Safari, Edge */
    ::-webkit-scrollbar-button {
        display: none;
        width: 0;
        height: 0;
    }

    /* Remove Scrollbar by Default */
    ::-webkit-scrollbar {
        width: 8px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        transition: background 0.3s ease-in-out, opacity 0.5s ease-in-out;
    }

    /* Firefox - Remove Arrows & Hide Scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.6) rgba(0, 0, 0, 0.2);
    }

    /* Ensure Scrollbar Appears on Scroll */
    body:hover ::-webkit-scrollbar-thumb {
        opacity: 1;
    }

    /* Hide Scrollbar on Inactivity */
    body::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.9);
    }
`;
