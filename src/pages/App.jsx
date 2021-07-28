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


    let display = 'flex'
    let headerAlign = 'space-between'
    if (userId === 0) {
        display = 'none'
        headerAlign = 'flex-end'
        
    }

    function getJokeValue(joke) {
        UIStore.update(s => {s.joke = joke })
    }

    async function deleteJoke(id) {
        await api.delete('/deleteJoke', {
            data: {
                id: id
            }
        }).then((res) => {
            if (res.data.success) {
                return;
            }


            //mostra uma mensagem de erro aaaaaaaaaaaaa
        })
    }

    const add = {
        position: 'absolute',
        marginLeft: '89vw',
        marginTop: '75vh',
        backgroundColor: '#42C2E9',
        borderRadius: 80,
        width: 80,
        height: 80,
        cursor: 'pointer',
        display: display
    }
    
    const header = {
        position: 'fixed',
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: headerAlign,
        backgroundColor: '#42C2E9',

    }

    React.useEffect(() => {
        async function fetchData() {
            await api.post('feed', { id: userId }).then((res) => {
                let realFeed = [...res.data[0], ...res.data[1] ]
                setFeed(realFeed)
            });
        }
        fetchData();
        

    }, [feed])

    return (

        <main>

            <header style={header}>
                <div className="user" style={{display: display}} onClick={() => { history.push("/user") }}><p style={{ cursor: "pointer", marginLeft: 20, marginTop: 5 }} >{userName[0]}</p></div>
                <Link to="/login" style={{ color: 'black', fontSize: 20, marginRight: 30, marginTop: 20 }}>sair &rarr;</Link>
            </header>


            <div style={{flexDirection: "column-reverse"}}>
                <div style={{ height: 80 }}></div>

                <div onClick={() => { history.push("/cadastro/piada")}} style={add}> <h1 style={{fontSize: 60,marginLeft: '24%', marginTop: '-16%'}}>+</h1> </div>
                {feed.map(post => {
                    let background = "#C4C4C4"
                    let edit = ""
                    let del = ""
                    if(post.user_id.id === userId){
                        background = "#CCFF99"
                        
                        edit = <Link onClick={() => {getJokeValue(post.joke)}} to={`/edit/piada/${post.id}`}> Editar </Link>
                        del = <Link onClick={() => {deleteJoke(post.id)}} style={{color: 'red'}}> Apagar </Link>
                    }
                    return (
                        <Post key background={background} edit={edit} delete={del} user={post.user_id.name} joke={post.joke} date={post.date.split("T")[0]} />
                    )
                })}
            </div>
        </main>
    )
}