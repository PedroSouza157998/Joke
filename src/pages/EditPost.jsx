import React from "react";
import "../styles/pages/NewPost.css";
import ChakraButton from "../components/button";
import { Textarea } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { UIStore } from "../UIstate/UIstate";
import api from "../services/api";

export default function EditPost() {
    const postId = window.location.href.split("/")[5];
    const history = useHistory();
    const lastJoke = UIStore.useState(s => s.joke);
    const [joke, setJoke] = React.useState(lastJoke);
    const [display, setDisplay] = React.useState('none');
    const [mensageError, setMensageError] = React.useState('');

    const text = {
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 1
    }
    const deleteButton = {
        backgroundColor: '#CD3333',
        cursor: 'pointer',
        marginTop: -15,
        marginBottom: 20,
        padding: 7,
        borderRadius: 15
    }

    //verifica se o usuário está logado
    const userId = UIStore.useState(s => s.userId)
    if (userId === 0) history.push("/login")

    
    async function updateJoke() {
        if (joke === undefined || joke === ' ' || joke === '  ') {
            setDisplay("flex")
            setMensageError("Digite alguma coisa !!!")
        } else {
            await api.put('/updateJoke', { id: postId, joke: joke }).then((res) => {
                history.push("/");
            })
        }

    }
    async function deleteJoke() {
        await api.delete('/deleteJoke', {
            data: {
                id: postId
            }
        }).then((res) => {
            if (res.data.success) {
                history.push("/");
            }


            //mostra uma mensagem de erro aaaaaaaaaaaaa
        })
    }

    return (
        <main>
            <div style={{ alignItems: 'center' }} className="card-main">
                <h1> Editar piada </h1>
                <Textarea onChange={(e) => setJoke(e.target.value)} value={joke}
                    placeholder="Texto: (Máximo de 300 caracteres)"
                    style={text}
                    height={200} width='90%' />

                <ChakraButton onClick={() => { updateJoke() }} text="Atualizar" />

                <div onClick={() => { deleteJoke() }} style={deleteButton}>Apagar postagem</div>
            </div>
            <div id="alert" style={{ marginTop: 50, display: display }}>
                <Alert status="error">
                    <AlertIcon />
                    {mensageError}
                </Alert>
            </div>
        </main>
    )
}