import React from "react";
import Checkbox from "../Checkbox";

const Task = ({ text, complete }) => {

    return (
        <div className={`task-item`}>
            <Checkbox />
            <p className={complete ? "done" : ""}>{text}</p>
        </div>
    )
}

export default Task;