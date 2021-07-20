import React from "react";
import { } from 'react-router-dom';
import "../styles/pages/Register.css"
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";
import {Input} from "@chakra-ui/react"

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