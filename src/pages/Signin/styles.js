import styled from "styled-components";

import gameIcon from '../../img/icons/game-8-svgrepo-com.svg';
import chatIcon from '../../img/icons/chat2-svgrepo-com.svg';
import medalhaIcon from '../../img/icons/star-medal-svgrepo-com.svg';
import FundoImg from '../../img/images/fundo_signin.png';

export const IconGame = styled.img.attrs({
    src: gameIcon,
})`
    width: 40px;
    height: 40px;

`;

export const IconChat = styled.img.attrs({
    src: chatIcon,
})`
    width: 40px;
    height: 40px;

`;

export const IconMedal = styled.img.attrs({
    src: medalhaIcon,
})`
    width: 40px;
    height: 40px;

`;

export const Container = styled.div`
    display:flex;
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

export const FundoSigin = styled.img.attrs({
    src: FundoImg,
})`
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
    gap: 10px;
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%
    gap: 5%;
    height: 200px;

`;

export const Subtitulo = styled.h3`
    font-size: 2rem;
    color: #fff;
    font-wight: 600;
    text-align: left;
    width: 45%;
`;

export const TextContent = styled.p`
    font-size: 1.5rem;
    color: #fff;
    font-wight: 400;
    text-align: left;
    width: 45%;
`;

export const CardBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    gap: 15px;
    height: 200px;
    justify-content:center;

`;

export const CardWhite = styled.div`
    width: 200px;
    heiht: 200px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 0 0 15px;
    background-color: #F0EEE9;
    color: #000;
    font-size: 1.2rem;
    font-wight: 400;
    text-align: left;
`;

export const Card = styled.div`
    width: 200px;
    heiht: 200px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 0 0 15px;
    background-color: rgba(210, 216, 211, 0.5);
    color: #fff;
    font-size: 1.2rem;
    font-wight: 400;
    text-align: left;
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
`;

export const Descript = styled.h4`
    font-size: 1.3rem;
    font-wight: 400;
    color: #fff;
    text-align: center;

`;

export const LabelSignup = styled.label`
    font-size: 1.4rem;
    color: #fff;
    padding-top: 30px;
`;

export const LabelError = styled.label`
    font-size: 1.2rem;
    font-wight: 600;
    color: #df2b2b;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #fff;
    }
`;


