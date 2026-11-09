import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { InputName } from "../../components/Input/styles";
import { Form } from "../../components/Input/styles";
import Button from "../../components/Button/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Indexsignin = () => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const HandleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };
 

    return(
        <C.Container>
            <C.Content>
                <C.TextBox>
                    <C.Subtitulo>
                        Participe agore
                    </C.Subtitulo>
                    <C.TextContent>
                        Entre no mundo mágico dos games brasileiros.
                    </C.TextContent>
                </C.TextBox>
                <C.CardBox>
                    <C.CardWhite>
                        <C.IconGame />
                        Encontre seus novos jogos favoritos Nacionais
                    </C.CardWhite>
                    <C.Card>
                        <C.IconChat />
                        Converse com  outros jogadores
                    </C.Card>
                    <C.Card>
                        <C.IconMedal />
                        Mostre sua opinião, avalie os jogos
                    </C.Card>
                </C.CardBox>
            </C.Content>
            <C.FormContainer>
                <C.LabelText>
                    <C.Titulo>
                        Log In
                    </C.Titulo>
                    <C.Descript>
                        Digite o seus dados para logar em sua conta.
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
                    <Button text="Entrar" onClick={HandleLogin} />
                    <C.LabelSignup>
                        Não tem uma conta?
                        <C.Strong>
                            <Link to="/signup">&nbsp;Registre-se</Link>
                        </C.Strong>
                    </C.LabelSignup>
            </C.FormContainer>
        </C.Container>

    );
};

export default Indexsignin;