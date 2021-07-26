import React from "react";
import { Link } from "react-router-dom";

import api from "../services/api";
import Post from "../components/post"

import "../styles/pages/App.css";

export default function User() {
    const id = 2;

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
            <div onClick={() => { window.location.assign("http://localhost:3000/cadastro/piada")}} style={add}> <h1 style={{fontSize: 60,marginLeft: '24%', marginTop: '-16%'}}>+</h1> </div>
                <div style={{ height: 80 }}></div>
                {feed.map(post => {
                    return (
                        <Post user={post.user_id.name} key={post.id} joke={post.joke} />
                        )
                    })}
            </div>


        </main>
    )
}