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
            <strong>{props.user}</strong>
            <p style={{marginTop: 7}}>{props.joke}</p>
        </div>
    );
}