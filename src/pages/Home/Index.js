import React from "react";
import Button from "../../components/Button/Button";
import * as C from "./styles";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return(
            <C.Container>
                <C.Fundo />
                <Button text="Sair" onClick={() => [signout(), navigate("/")]}>
                    Sair
                </Button>
            </C.Container>
    );
};

export default Home;