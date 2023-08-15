import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    @font-face {
        src: url(../Kodak.ttf);
        font-family: "iran";
    }

    body {
        font-family: "iran";
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #3f3f3f;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

`