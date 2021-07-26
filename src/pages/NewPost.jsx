import React from "react";
import "../styles/pages/NewPost.css"
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";
import { UIStore } from "../UIstate/UIstate";
import { useHistory } from "react-router-dom";
import api from "../services/api";

export default function NewPost() {
    const history = useHistory()
    const [joke, setJoke] = React.useState()
    const id = UIStore.useState(s => s.userId)

    async function handleSubmit(){
        await api.post(`save_joke/${id}`, {joke}).then((res) => {
            history.push("/user")
        })
    }
    return (
        <main>
            <div className="card-main">
                <h1>Nova Postagem </h1>
                <ChakraInput onChange={(e) => setJoke(e.target.value)} placeholder="Texto: (Máximo de 300 caracteres)" height={200} width='100%'/>
                <ChakraButton onClick={() => {handleSubmit()}} text="Postar" />
            </div>
        </main>
    )
}