import styled from "styled-components";

import { FontFamilies } from '../../shared/DesignTokens';


export const Button = styled.button`
    padding: 16px 20px;
    outiline: none;
    border: none;
    border-radius: 12px;
    width: 60%;
    cursor: pointer;
    background-color: #F0EEE9;
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    font-family: ${FontFamilies.TITLE};

    color: #000;
        @media (max-width: 500px){
        width: 80%;
    }
`;