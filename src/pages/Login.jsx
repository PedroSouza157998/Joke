import React from "react";
import { Link } from "react-router-dom";
import { Alert, AlertIcon} from "@chakra-ui/react"

import ChakraInput from "../components/input";
import ChakraButton from "../components/button";
import api from "../services/api";
import MyContext from "../context/MyContext";

import "../styles/pages/Login.css"

export default function App() {
    const [login, setLogin] = React.useState('')
    const [user, setUser] = React.useState({})
    const [password, setPassword] = React.useState('')
    const [display, setDisplay] = React.useState('none')
    const [mensageError, setMensageError] = React.useState('')

    const{ userId, setUserId } = React.useContext(MyContext)
    setUserId(2)
    console.log(userId);

    async function handleSubmit(event) {
        event.preventDefault();

        if (login && password) {
            await api.post('login', { login, password }).then((res) => {
                setUser(res.data[0])
            })
            if (user) {                
                window.location.assign("http://localhost:3000")
            }
            else {
                setDisplay("flex")
                setMensageError("Usuário ou senha incorretos !!!")
            }

        } else {
            setDisplay("flex")
            setMensageError("Preencha todos os campos !!!")
        }
    }


    return (
        <main>
            <form onSubmit={handleSubmit} className="card-main">
                <h1>Conecte-se</h1>
                <ChakraInput placeholder="Usuário" onChange={(state) => setLogin(state.target.value)} />
                <ChakraInput placeholder="Senha" type="password" onChange={(state) => setPassword(state.target.value)} />
                <ChakraButton text="Entrar" type="submit" />
                <Link to="/cadastro" style={{ color: "#1E90FF" }} >Não tem conta? Faça seu cadastro:</Link>
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