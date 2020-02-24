import React from "react";

const Button = ({ text, action, type, style }) => {
    
    return (
        <div 
            className={`btn ${type}`}
            onClick={action}
            style={style}
        >
            {text}
        </div>
    )
}

export default Button;