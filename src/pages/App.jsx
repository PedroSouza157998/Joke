import React from "react";
import Post from "../components/post";
import api from "../services/api";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";
import "../styles/pages/App.css";

export default function App() {

    const{ userId } = React.useContext(MyContext)
    const [feed, setFeed] = React.useState([]);
    
    const header = {
        position: 'fixed',
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#42C2E9',

    }

    React.useEffect(() => {
        async function fetchData() {
            await api.get('feed').then((res) => {
                setFeed(res.data)
            });
        }
        fetchData();
        console.log(userId);

    }, [])
    const userName = 'Rodrigo'

    return (

        <main>

            <header style={header}>
                <div className="user" onClick={() => { window.location.assign("http://localhost:3000/user") }}><p style={{ cursor: "pointer", marginLeft: 20, marginTop: 5 }} >{userName[0]}</p></div>
                <Link to="/login" style={{ color: '#D41925', fontSize: 20, marginRight: 30, marginTop: 20 }}>sair &rarr;</Link>
            </header>


            <div>
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