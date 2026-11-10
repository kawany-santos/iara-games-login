import styled from "styled-components";

import FundoHome from '../../img/images/fundo_home.png'; 

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10%;
    width: 50vw;
    gap: 20px;
    @media (max-width: 500px){
        width: 100vw;
        padding-top: 30%;

    }
`;

export const Fundo = styled.img.attrs({
    src: FundoHome,
})`
    width: 30vw;
    height: auto;
    @media (max-width: 1300px){
        width: 100vw;

    }

`;