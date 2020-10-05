import React, { useState } from 'react';

function Cell(props) {
    const [text, setText] = useState("X");
    const [color, setColor] = useState("blue");
    
    const clicked = () => {
        setText(props.setGreen ? props.count : "X");
        setColor(props.setGreen ? "green" : "red");
        props.onClick();
    }

    return <div style={{ ...props.style, background: color} } onClick={ clicked }>{text}</div>
}

export default Cell;