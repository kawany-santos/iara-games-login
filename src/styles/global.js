import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;

    }

    body{
        width:100%;
        height:100%;
        background-color: #08070D;
        align-items:center;
        justify-content: center;
        display:flex;
        padding-top: 5%;
    }
`;

export default GlobalStyle;