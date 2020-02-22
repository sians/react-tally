import React, {useState} from "react";

const Task = ({ text, complete, colors }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    }

    return (
        <div 
            className={`task-item`}
            style={{background: selected && colors.primary}}
            onClick={handleClick}>
                <p 
                    className={complete ? "done" : ""}
                    style={{color: selected && colors.soft}}>
                        {text}
            </p>
        </div>
    )
}

export default Task;