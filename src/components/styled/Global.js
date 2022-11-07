import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        font-family: 'Inter', sans-serif;   
    }

    img {
        max-width: 100%;
    }

    .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    }

    .ReactModal__Overlay--after-open{
    opacity: 1;
    }

    .ReactModal__Overlay--before-close{
    opacity: 0;
    }

    .spring-wrapper {
        flex: 1;
    }

    
`

export default GlobalStyles