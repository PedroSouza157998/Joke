import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { UIStore } from "../UIstate/UIstate";

import ChakraInput from "../components/input";
import ChakraButton from "../components/button";
import api from "../services/api";

import "../styles/pages/Login.css";

export default function App() {
    const history = useHistory();
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [display, setDisplay] = React.useState('none')
    const [mensageError, setMensageError] = React.useState('')

    async function handleSubmit(event) {
        event.preventDefault();

        if (login && password) {
            await api.post('login', { login, password }).then((res) => {
                if (res.data[0]) {
                    UIStore.update(s => { s.userId = res.data[0].id })
                    UIStore.update(s => { s.userName = res.data[0].name })
                    history.push("/")
                } else {
                    setDisplay("flex")
                    setMensageError("Usuário ou senha incorretos !!!")
                }
            })
            // if (user) history.push("/")

        } else {
            setDisplay("flex")
            setMensageError("Preencha todos os campos !!!")
        }
    }
    return (
        <main>
            <form onSubmit={handleSubmit} className="card-main">
                <h1>Conecte-se</h1>
                <ChakraInput placeholder="Login" onChange={(state) => setLogin(state.target.value)} />
                <ChakraInput placeholder="Senha" type="password" onChange={(state) => setPassword(state.target.value)} />
                <ChakraButton text="Entrar" type="submit" />
                <div style={{alignItems: 'center'}}> <Link to="/cadastro" style={{ color: "#1E90FF" }} >Não tem conta? Faça seu cadastro:</Link> </div>
            </form>
            <div id="alert" style={{ marginTop: 50, display: display }}>
                <Alert status="error">
                    <AlertIcon />
                    {mensageError}
                </Alert>
            </div>
        </main>
    )
}