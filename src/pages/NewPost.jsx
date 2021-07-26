import React from "react";
import "../styles/pages/NewPost.css"
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";

export default function NewPost() {
    return (
        <main>
            <div className="card-main">
                <h1>Nova Postagem </h1>
                <ChakraInput placeholder="Texto: (Máximo de 300 caracteres)" height={200} width='100%'/>
                <ChakraButton text="Postar" />
            </div>
        </main>
    )
}