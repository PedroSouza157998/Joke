import React from "react";
import "../styles/pages/Register.css";
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";

export default function Register() {
    return (
        <main>
            <div className="card-main">
                <h1>Cadastro</h1>
                <ChakraInput placeholder="Usuário"/>
                <ChakraInput placeholder="Email"/>
                <ChakraInput placeholder="Senha" type="password"/>
                <ChakraButton text="Cadastrar" />
            </div>
        </main>
    )
}