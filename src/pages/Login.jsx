import React from "react";
import { } from 'react-router-dom';
import "../styles/pages/Login.css"
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";

export default function App() {
    return (
        <main>
            <div className="card-main">
                <h1>Conecte-se</h1>
                <ChakraInput placeholder="Usuário"/>
                <ChakraInput placeholder="Senha"/>
                <ChakraButton text="Entrar" />
            </div>
        </main>
    )
}