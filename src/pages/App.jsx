import React from "react";
import Post from "../components/post";
import "../styles/pages/App.css"
export default function App(){
    const header = {
        position: 'fixed', 
        width: '100%', 
        height: 80, 
        display:'flex', 
        justifyContent:'space-between', 
        backgroundColor:'white',
        
    }
    return(
        <main>
            
            <header style={header}>
            <div className="user"><p style={{marginLeft:20, marginTop: 5}} >P</p></div>
                <p style={{color:'red',fontSize: 20, marginRight: 30, marginTop: 20}}>sair &rarr;</p>
            </header>
            

            <div>
                <div style={{height: 80}}></div>
                <Post />
            </div>
        </main>
    )
}