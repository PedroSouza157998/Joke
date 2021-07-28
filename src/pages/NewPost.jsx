import React from "react";
import "../styles/pages/NewPost.css"
import ChakraButton from "../components/button";
import { Textarea } from "@chakra-ui/react";
import { UIStore } from "../UIstate/UIstate";
import { useHistory } from "react-router-dom";
import api from "../services/api";

export default function NewPost() {
    const history = useHistory()
    const [joke, setJoke] = React.useState()
    const id = UIStore.useState(s => s.userId)

    const text = {
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 1
    }
    //verifica se o usuário está logado
    const userId = UIStore.useState(s => s.userId)
    if (userId === 0) history.push("/login")

    async function handleSubmit(){
        await api.post(`save_joke/${id}`, {joke}).then((res) => {
            history.push("/")
        })
    }
    return (
        <main>
            <div style={{alignItems: 'center'}} className="card-main">
                <h1><center> Conte aqui uma nova piada </center></h1>
                <Textarea onChange={(e) => setJoke(e.target.value)} 
                placeholder="Texto: (Máximo de 300 caracteres)" 
                style={text}
                height={200} width='90%' 
                />
                <ChakraButton onClick={() => {handleSubmit()}} text="Postar" />
            </div>
        </main>
    )
}