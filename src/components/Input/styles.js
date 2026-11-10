import styled from "styled-components";

import { FontFamilies } from '../../shared/DesignTokens';


export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 300px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    outline: none;
    padding: 16px 20px;
    width: 60%;
    border-radius: 12px;
    font-size: 1.1rem;
    font-family: ${FontFamilies.TEXT};

    background-color: #1E1E1E;
    border:none;
    color:#A0A6B4;
    @media (max-width: 500px){
        width: 80%;
    }
`;

export const InputName = styled.label`
    font-size: 1.2rem;
    font-wight: 500;
    color: #A0A6B4;
    width: 60%;
    font-family: ${FontFamilies.TITLE};
    text-align: left;
    @media (max-width: 500px){
        width: 80%;
    }
`;
