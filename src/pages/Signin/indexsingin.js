import React, { useState } from "react";
import Input from "../../components/Input/Input";
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
                <C.Label>Sistema de login</C.Label>
                <C.Content>
                    <Input 
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <Input 
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <C.LabelError>{error}</C.LabelError>
                    <Button text="Entrar" onClick={HandleLogin} />
                    <C.LabelSignup>
                        Não tem uma conta?
                        <C.Strong>
                            <Link to="/signup">&nbsp;Registre-se</Link>
                        </C.Strong>
                    </C.LabelSignup>
                </C.Content>
            </C.Container>
    );
};

export default Indexsignin;