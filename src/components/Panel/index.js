import React, {useState} from "react";

import PanelMenu from "./PanelMenu"
import Task from "../Task"

const Panel = ({ category, tasks, colors }) => {
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseHover = () => { 
        setIsHovering(!isHovering)
    }
    
    const taskList = tasks.map((task) => {
        return <Task 
            key={task.id}
            text={task.text}
            complete={task.complete}
            colors={colors}
        />
    })

    return (
        <div className={`task-panel ${category}`}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}>
                
            {isHovering ? <PanelMenu colors={colors} /> : <div className="panel-menu"></div>}
            
            <h5>{category}</h5>
            {taskList}
        </div>
    )
}

export default Panel;