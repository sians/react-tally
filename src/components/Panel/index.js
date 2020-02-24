import React, {useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import PanelMenu from "./PanelMenu"
import Task from "../Task"
import Button from "../Button"
import TaskForm from "../TaskForm"

const Panel = ({ panel, category, colors, nextTaskId, setNextTaskId }) => {
    const plusIcon = <FontAwesomeIcon icon={faPlus} style={{opacity: 0.3}}/>

    const [tasks, setTasks] = useState(panel.tasks);
    const [isHovering, setIsHovering] = useState(false);
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [submit, setSubmit] = useState(false);
    
    const handleMouseHover = () => { 
        setIsHovering(!isHovering)
    }
    const handleAddTaskButtonClick = () => {
        setIsAddingTask(!isAddingTask)
    }
    const handleAddTask =  () => {
        setSubmit(true);
    }
    const createNewTask = (value) => {
        const newTask = {
            "id" : nextTaskId,
            "text" : value,
            "completed" : false
        }
        setTasks([...tasks, newTask]);
        setNextTaskId(nextTaskId += 1);
        setSubmit(false);
        setIsAddingTask(false);
    }

    const addTaskButtonStyle = {
        background: colors.primary,
        color: colors.soft
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

            <Button 
                text={plusIcon}
                action={isAddingTask ? handleAddTask : handleAddTaskButtonClick}
                type="add-task"
                colors={colors}
                style={addTaskButtonStyle}
                />

            <TaskForm 
                colors={colors}
                show={isAddingTask}
                submit={submit}
                createNewTask={createNewTask}
                />

            <div className="task-list">
                {taskList.reverse()}
            </div>
        </div>
    )
}

export default Panel;