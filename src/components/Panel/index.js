import React from "react";

import Task from "../Task"

const Panel = ({ category }) => {

    return (
        <div className={`task-panel ${category}`}>
            <h5>{category}</h5>
            <Task text="Hardcoded task woo" complete={false}/>
            <Task text="Another one" complete={true}/>
            <Task text="Yay tasks are fun aren't they super fun yes they are yay" complete={false}/>
        </div>
    )
}

export default Panel;