import React from "react";
import Post from "../components/post";
import api from "../services/api";
import { UIStore } from "../UIstate/UIstate";
import { Link, useHistory } from "react-router-dom";
import "../styles/pages/App.css";

export default function App() {
    const history = useHistory();
    const [feed, setFeed] = React.useState([]);
    const userName = UIStore.useState(s => s.userName)
    const userId = UIStore.useState(s => s.userId)

    if (userId === 0) history.push("/login")
    
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
        

    }, [])

    return (

        <main>

            <header style={header}>
                <div className="user" onClick={() => { history.push("/user") }}><p style={{ cursor: "pointer", marginLeft: 20, marginTop: 5 }} >{userName[0]}</p></div>
                <Link to="/login" style={{ color: '#D41925', fontSize: 20, marginRight: 30, marginTop: 20 }}>sair &rarr;</Link>
            </header>


            <div style={{flexDirection: "column-reverse"}}>
                <div style={{ height: 80 }}></div>
                {feed.map(post => {
                    const date = post.date.split("T")
                    let background = "#C4C4C4"
                    let edit = ""
                    if(post.user_id.id === userId){
                        background = "#CCFF99"
                        edit = <Link to={`/edit/piada/${post.id}`}> Editar </Link>
                    }
                    return (
                        <Post key background={background} edit={edit} user={post.user_id.name} joke={post.joke} date={date[0]} />
                    )
                })}
            </div>
        </main>
    )
}