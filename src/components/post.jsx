import React from "react";

export default function Post() {
    const body = {
        backgroundColor: '#C4C4C4',
        borderRadius: 10,
        width: '60%',
        minHeight: 100,
        marginLeft: '20%',
        marginTop: 20
    }
    return (
        <div style={body}>
            <strong>user name</strong>
            <p style={{marginTop: 7}}> Conteudo fica aqui, muitas piadas KKKKKKKKKKKKKKKKKKKKK</p>
        </div>
    );
}