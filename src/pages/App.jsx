import React from "react";
import Post from "../components/post";
import api from "../services/api";
import { Link } from "react-router-dom"
import "../styles/pages/App.css"
export default function App() {
    const [feed, setFeed] = React.useState([])
    const header = {
        position: 'fixed',
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',

    }
    
    React.useEffect(async () => {
        await api.get('feed').then((res) => {
            setFeed(res.data)
        })
    }, [])
    return (

        <main>

            <header style={header}>
                <div className="user"><p style={{ marginLeft: 20, marginTop: 5 }} >P</p></div>
                <Link to="/login" style={{ color: 'red', fontSize: 20, marginRight: 30, marginTop: 20 }}>sair &rarr;</Link>
            </header>


            <div>
                <div style={{ height: 80 }}></div>
                {feed.map(post => {
                    return(
                        <Post user={post.user_id.name} key={post.id} joke={post.joke}/>
                    )
                }) }
            </div>
        </main>
    )
}