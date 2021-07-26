import React from "react";
import "../styles/pages/NewPost.css"
import ChakraInput from "../components/input";
import ChakraButton from "../components/button";
import { UIStore } from "../UIstate/UIstate";
import { useHistory } from "react-router-dom";
import api from "../services/api";

export default function EditPost() {
    const postId = UIStore.useState(s => s.postId)
    const history = useHistory();
    const [joke, setJoke] = React.useState();
    
    async function updateJoke(){
        await api.delete('/updateJoke', {id: postId, joke: joke}).then((res) => {
            console.log(res)
            console.log(postId);
            history.push("/");
        })

    }
    async function deleteJoke(){
        await api.delete('/deleteJoke', {id: postId}).then((res) => {
            console.log(res)
            console.log(postId);
            history.push("/");
        })
    }

    return (
        <main>
            <div className="card-main">
                <h1> Editar piada </h1>
                <ChakraInput onChange={(e) => setJoke(e.target.value)} placeholder="Texto: (Máximo de 300 caracteres)" height={200} width='100%' />
                 <ChakraButton onClick={() => { updateJoke() }} text="Atualizar" /> 
                <div onClick={() => { deleteJoke() }} style={{backgroundColor: 'red', cursor: 'pointer'}}>Apagar postagem</div>
            </div>
        </main>
    )
}