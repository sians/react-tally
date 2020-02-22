import React from "react";

const Button = ({ text, action, type }) => {
    return (
        <div className={`btn ${type}`} onClick={action}>
            {text}
        </div>
    )
}

export default Button;