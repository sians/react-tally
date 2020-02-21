import React from "react";

const Panel = ({ category }) => {

    return (
        <div className={`task-panel ${category}`}>
            <h5>{category}</h5>
            
        </div>
    )
}

export default Panel;