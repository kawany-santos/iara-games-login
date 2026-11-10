import React from "react";
import { useState } from 'react';
import Input from "../../components/Input/Input";
import { Form } from "../../components/Input/styles";
import { InputName } from "../../components/Input/styles";
import Button from "../../components/Button/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Indexsignup = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { signup } = useAuth();

    const HandleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        }else if (email !== emailConf)
        {
            setError("Os e-mails não são iguais");
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    };

    return(
        <C.Container>
            <C.FormContainer>
                <C.LabelText>
                    <C.Titulo>
                        Crie uma conta
                    </C.Titulo>
                    <C.Descript>
                        Digite o seus dados para criar uma conta.
                    </C.Descript>
                </C.LabelText>
                <Form>
                    <InputName>
                        E-mail
                    </InputName>
                <Input 
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                    <InputName>
                        Confirme seu e-mail
                    </InputName>
                                    <Input 
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                    <InputName>
                        Senha
                    </InputName>
                                    <Input 
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                </Form>
                <C.LabelError>{error}</C.LabelError>
                <Button text="Inscrever-se" onClick={HandleSignup} />
                <C.LabelSignup>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignup>  
            </C.FormContainer>
            <C.Content>
                <C.TextBox>
                    <C.Subtitulo>
                        Começe com a gente
                    </C.Subtitulo>
                    <C.TextContent>
                        Complete esses simples passos para criar sua conta.
                    </C.TextContent>
                </C.TextBox>
                <C.CardBox>
                    <C.CardWhite>
                        <C.DivIcon>
                            <C.IconOne />
                        </C.DivIcon>
                        <C.DivBox>
                            Crie a sua conta
                        </C.DivBox>
                    </C.CardWhite>
                    <C.Card>
                        <C.DivIcon>
                            <C.IconTwo />
                        </C.DivIcon>
                        <C.DivBox>
                            Faça o login
                        </C.DivBox>
                    </C.Card>
                    <C.Card>
                        <C.DivIcon>
                            <C.IconThree />
                        </C.DivIcon>
                        <C.DivBox>
                            Acesse o novo mundo
                        </C.DivBox>
                        
                    </C.Card>
                </C.CardBox>
            </C.Content>
        </C.Container>
    );
};

export default Indexsignup;