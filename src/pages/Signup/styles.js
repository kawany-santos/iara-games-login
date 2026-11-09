import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100%;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #7289a0;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 1.6rem;
    font-wight: 600;
    color: #379009;
`;

export const LabelSignup = styled.label`
    font-size: 1.4rem;
    color: #650990;
`;

export const LabelError = styled.label`
    font-size: 1.2rem;
    font-wight: 600;
    color: #64abc9;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #6812ab;
    }
`;