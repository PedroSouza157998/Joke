import React from "react";
import "../styles/pages/Login.css"
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";
import api from "../services/api";

export default function App() {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')


    async function handleSubmit(event) {
        event.preventDefault();
        if (login !== '' && password !== '') {
            await api.get('login', {login, password}).then((res)=>{
                console.log(res.data)
            })

        } else alert("Preencha todos os campos !!")
    }


    return (
        <main>
            <form onSubmit={handleSubmit} className="card-main">
                <h1>Conecte-se</h1>
                <ChakraInput placeholder="Usuário" onChange={(state) => setLogin(state.target.value)}/>
                <ChakraInput placeholder="Senha" type="password" onChange={(state) => setPassword(state.target.value)}/>
                <ChakraButton text="Entrar" type="submit"/>
            </form>
        </main>
    )
}