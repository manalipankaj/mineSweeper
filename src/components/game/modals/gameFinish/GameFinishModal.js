import React from 'react';

const style = { 
    position:'absolute', 
    top:"50%", 
    left:"50%", 
    transform: 'translate(-50%,-50%)', 
    background: "red" 
}

export default function GameOverModal(props) {
    const { clickHandler, status } = props;
    return (<div style={{backgroundColor: "rgba(10, 10, 10, 10)"}}>
            <div style={style}>{status === "OVER" ? "Game Over!!!" : "You won it!!!"}</div>
            <button style={{...style, top:"55%", left:"50%", transform: 'translate(-50%,-50%)', background: "red"}} onClick={clickHandler}>Restet</button>
        </div>);
}