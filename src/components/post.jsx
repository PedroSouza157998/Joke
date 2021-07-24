import React from "react";

export default function Post(props) {
    const body = {
        backgroundColor: '#C4C4C4',
        borderRadius: 10,
        width: '60%',
        minHeight: 100,
        marginLeft: '20%',
        marginTop: 20
    }
    return (
        <div key={props.key} style={body}>
            <div style={{height:5}}></div>
            <strong style={{padding: 10}}>{props.user}</strong>
            <p style={{marginTop: "1%", marginLeft: 20}}>{props.joke}</p>
        </div>
    );
}