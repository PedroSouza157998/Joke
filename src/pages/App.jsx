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
        })
    }
    async function fetchData() {
        //the api return 2 arrays, the first with the posts from user, and the other with the posts from rest users
        await api.post('feed', { id: userId }).then((res) => {
            let realFeed = [...res.data[0], ...res.data[1] ]
            setFeed(realFeed)
        });
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
                    let buttonEdit = ""
                    let buttonDelete = ""
                    if(post.user_id.id === userId){
                        background = "#CCFF99"
                        
                        buttonEdit = <Link onClick={() => {getJokeValue(post.joke)}} to={`/edit/piada/${post.id}`}> Editar </Link>
                        buttonDelete = <p onClick={() => {deleteJoke(post.id)}} style={{color: 'red', cursor: 'pointer'}}> Apagar </p>
                    }
                    return (
                        <div key={post.id}>
                        <Post key background={background} edit={buttonEdit} delete={buttonDelete} user={post.user_id.name} joke={post.joke} date={post.date.split("T")[0]} />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}