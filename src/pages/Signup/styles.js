import styled from "styled-components";

import { FontFamilies } from '../../shared/DesignTokens';

import OneIcon from '../../img/icons/one-closed-svgrepo-com.svg';
import TwoIcon from '../../img/icons/two-closed-svgrepo-com.svg';
import ThreeIcon from '../../img/icons/three-closed-svgrepo-com.svg';
import FundoSignup from '../../img/images/fundo_signup.png';

export const IconOne = styled.img.attrs({
    src: OneIcon,
})`
    width: 30px;
    height: 30px;

`;

export const IconTwo = styled.img.attrs({
    src: TwoIcon,
})`
    width: 30px;
    height: 30px;

`;

export const IconThree = styled.img.attrs({
    src: ThreeIcon,
})`
    width: 30px;
    height: 30px;

`;

export const FundoUp = styled.img.attrs({
    src: FundoSignup,
})`
    width: 40%;
    height: 85vh;

`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    gap: 20px;
`;

export const FormContainer = styled.div`
    gap: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    height: 85vh;
    
`;


export const Content = styled.div`
    width: 40%;
    height: 85vh;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 6%;

`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Subtitulo = styled.h3`
    font-size: 2.5rem;
    color: #fff;
    font-wight: 600;
    text-align: center;
    width: 100%;
    font-family: ${FontFamilies.TITLE};

`;

export const TextContent = styled.p`
    font-size: 1.5rem;
    color: #fff;
    font-wight: 400;
    text-align: center;
    width: 100%;
    font-family: ${FontFamilies.TEXT};

`;

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 15px;
    justify-content:center;
    align-items: center;

`;

export const CardWhite = styled.div`
    width: 50%;
    height: 60px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: #F0EEE9;
    color: #000;
    font-size: 1.2rem;
    font-wight: 400;
    align-items: center;
    justify-content: center;
    font-family: ${FontFamilies.TEXT};

`;

export const Card = styled.div`
    width: 50%;
    height: 60px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: rgba(210, 216, 211, 0.5);
    color: #fff;
    font-size: 1.2rem;
    font-wight: 400;
    align-items: center;
    justify-content: center;
    font-family: ${FontFamilies.TEXT};

`;

export const DivIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const DivBox = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
`;

export const LabelText = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100px;

`;

export const Titulo = styled.h1`
    font-size: 2.5rem;
    font-wight: 600;
    color: #fff;
    text-align: center;
    @media (max-width: 500px){
        font-size: 1.8rem;
    }
    font-family: ${FontFamilies.TITLE};

`;

export const Descript = styled.h4`
    font-size: 1.3rem;
    font-wight: 400;
    color: #fff;
    text-align: center;
    @media (max-width: 500px){
        font-size: 1rem;
    }
    font-family: ${FontFamilies.TEXT};

`;

export const LabelSignup = styled.label`
    font-size: 1.4rem;
    color: #fff;
    padding-top: 30px;
    font-family: ${FontFamilies.TEXT};

`;

export const LabelError = styled.label`
    font-size: 1.2rem;
    font-wight: 600;
    color: #df2b2b;
    font-family: ${FontFamilies.TEXT};

`;

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #fff;
    }
`;






  