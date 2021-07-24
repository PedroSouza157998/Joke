import React from "react";
import "../styles/pages/Register.css";
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";
import api from "../services/api";
import {
    Alert,
    AlertIcon
} from "@chakra-ui/react"

export default function Register() {
    const [user, setUser] = React.useState('')
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [display, setDisplay] = React.useState('none')
    const [mensageError, setMensageError] = React.useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        if (user !== '' && login !== '' && password !== '') {
            await api.post("/checkRegister", { login }).then((res) => {
                setDisplay("flex")
                setMensageError("Login já existe !!!")
                return;
            })

            await api.post('register', { name: user, login, password })
            console.log({ user, login, password })
            window.location.assign("http://localhost:3000")

        } else {
            setDisplay("flex")
            setMensageError("Preencha todos os campos !!!")
        }

    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="card-main">
                <h1>Cadastro</h1>
                <ChakraInput placeholder="Usuário" onChange={(state) => setUser(state.target.value)} />
                <ChakraInput placeholder="Login" onChange={(state) => setLogin(state.target.value)} />
                <ChakraInput placeholder="Senha" type="password" onChange={(state) => setPassword(state.target.value)} />
                <ChakraButton text="Cadastrar" type="submit" />
            </form>
            <div style={{ marginTop: 50, display: display }}>
                <Alert status="error">
                    <AlertIcon />
                    {mensageError}
                </Alert>
            </div>
        </main>
    )
}