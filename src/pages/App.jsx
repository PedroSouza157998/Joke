import React from "react";
import "../styles/pages/app.css"
export default function App(){
    return(
        <main>
            
            <header style={{height: 80, display:'flex', justifyContent:'space-between', backgroundColor:'#C4C4C4'}}>
            <div className="user"></div>
                <p style={{color:'red',fontSize: 20, marginRight: 30, marginTop: 20}}>sair &rarr;</p>
            </header>
            
            

            <div className="body"></div>
        </main>
    )
}