import React from "react";
import { Link, useHistory } from "react-router-dom";
import { UIStore } from "../UIstate/UIstate";

import api from "../services/api";
import Post from "../components/post";

import "../styles/pages/App.css";

export default function User() {
    const id = UIStore.useState(s => s.userId)
    const history = useHistory();

    const [feed, setFeed] = React.useState([]);

    api.get(`public/${id}`).then((res) => {
        setFeed(res.data)
    })

    const header = {
        position: 'fixed',
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#42C2E9',
    }
    const add = {
        position: 'absolute',
        marginLeft: '90vw',
        marginTop: '85vh',
        backgroundColor: '#42C2E9',
        borderRadius: 80,
        width: 80,
        height: 80,
        cursor: 'pointer'
    }

    return (

        <main>


            <header style={header}>
                <Link to="/" style={{ fontSize: 19, marginLeft: 30, marginTop: 20 }} >&larr; Página principal</Link>
                <Link to="/login" style={{ color: '#D41925', fontSize: 20, marginRight: 30, marginTop: 20 }}>sair &rarr;</Link>
            </header>


            <div>
            <div onClick={() => { history.push("/cadastro/piada")}} style={add}> <h1 style={{fontSize: 60,marginLeft: '24%', marginTop: '-16%'}}>+</h1> </div>
                <div style={{ height: 80 }}></div>
                {feed.map(post => {
                    
                    const date = post.date.split("T")
                    let background = "#C4C4C4"
                    let edit = ""
                    if(post.user_id.id === id){
                        background = "#CCFF99"
                        UIStore.update(s => {s.postId = post.id})
                        edit = <Link to={`/edit/piada`}> Editar </Link>
                    }
                    return (
                        <Post user={post.user_id.name} edit={edit} key={post.id} joke={post.joke} background={background} date={date[0]} />
                        )
                    })}
            </div>


        </main>
    )
}