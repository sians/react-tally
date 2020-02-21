import React from "react";

const Task = ({ text, complete }) => {

    return (
        <div className={`task-item ${category}`}>
            <p>{text}</p>
        </div>
    )
}

export default Task;