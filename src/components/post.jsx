import React from "react";

export default function Post(props) {
    const body = {
        backgroundColor: props.background,
        borderRadius: 10,
        width: '60%',
        minHeight: 100,
        marginLeft: '20%',
        marginTop: 20
    }
    return (
        <div key={props.key} style={body}>
            <div style={{ height: 5 }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ marginLeft: 10 }}>{props.user}</strong>

                <div style={{display: 'flex', justifyContent: 'flex-end'}}>

                    <div>{props.edit}</div>
                    <div style={{width: 9}}></div>
                    <p style={{ marginRight: 10 }}>{props.date}</p>

                </div>
            </div>

            <p style={{ marginTop: "1%", marginLeft: 20 }}>{props.joke}</p>

        </div>
    );
}