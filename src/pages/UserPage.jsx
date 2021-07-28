import React from "react";
import { Link, useHistory } from "react-router-dom";
import { UIStore } from "../UIstate/UIstate";

import api from "../services/api";
import Post from "../components/post";

import "../styles/pages/App.css";

export default function User() {
    const id = UIStore.useState(s => s.userId)
    const history = useHistory();
    const [mensage, setMensage] = React.useState('none')

    if (id === 0) window.location.assign("http://localhost:3000/login")

    const [feed, setFeed] = React.useState([]);

    function getJokeValue(joke) {
        UIStore.update(s => { s.joke = joke })
    }

    async function deleteJoke(id) {
        await api.delete('/deleteJoke', {
            data: {
                id: id
            }
        })
    }
    async function fetchData() {
        await api.get(`public/${id}`).then((res) => {
            setFeed(res.data)
        })
    }

    const header = {
        position: 'fixed',
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#42C2E9',
    }
    const buttonFromAdd = {
        position: 'absolute',
        marginLeft: '90vw',
        marginTop: '85vh',
        backgroundColor: '#42C2E9',
        borderRadius: 80,
        width: 80,
        height: 80,
        cursor: 'pointer'
    }
    React.useEffect(() => {
        fetchData();
        if (feed.length === 0) {
            setMensage("flex")
        }
        else setMensage("none");
    }, [feed])

    return (

        <main>


            <header style={header}>
                <Link to="/" style={{ fontSize: 19, marginLeft: 30, marginTop: 20 }} >&larr; Página principal</Link>
                <Link to="/login" style={{ color: 'black', fontSize: 20, marginRight: 30, marginTop: 20 }}>sair &rarr;</Link>
            </header>


            <div style={{ width: '100vw', height: '100vh'}}>

                <div onClick={() => { history.push("/cadastro/piada") }} style={buttonFromAdd}> <h1 style={{ fontSize: 60, marginLeft: '24%', marginTop: '-16%' }}>+</h1> </div>
                <div style={{ height: 80 }}></div>
                {feed.map(post => {
                    const date = post.date.split("T")
                    let background = "#C4C4C4"
                    let edit = ""
                    let del = ""
                    
                    //if id that the user typed is valid
                    if (post.user_id.id === id) {
                        background = "#CCFF99"
                        UIStore.update(s => { s.postId = post.id })
                        edit = <Link onClick={() => { getJokeValue(post.joke) }} to={`/edit/piada/${post.id}`}> Editar </Link>
                        del = <Link onClick={() => { deleteJoke(post.id) }} style={{ color: 'red' }}> Apagar </Link>
                    }
                    return (
                        <Post user={post.user_id.name} edit={edit} delete={del} key={post.id} joke={post.joke} background={background} date={date[0]} />
                    )
                })}
                <p style={{ display: mensage, marginLeft: '42%', marginTop:100 }}>Não há publicações suas</p>


            </div>



        </main>
    )
}