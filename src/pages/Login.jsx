import React from "react";
import "../styles/pages/Login.css"
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";

export default function App() {
    return (
        <main>
            <div className="card-main">
                <h1>Conecte-se</h1>
                <ChakraInput placeholder="Usuário"/>
                <ChakraInput placeholder="Senha" type="password"/>
                <ChakraButton text="Entrar" />
            </div>
        </main>
    )
}