import React, { useState } from "react";
import styled from 'styled-components';

import TextField from '../TextField'
import Button from '../Button'

const TaskForm =  ({ colors, show, submit, createNewTask }) => {
    const formClasses = ['task-form'];
    if (show) { formClasses.push('show'); }
    
    const [value, setValue] = useState('');

    const handleChangeEvent = (e) => {
        setValue(e.target.value);
    }

    if (submit && value.length > 0) { 
        createNewTask(value); 
        setValue('');
    }

    return (
        <form className={formClasses.join(' ')}>
            <div>
                <TextField 
                    styleType="add-task-text-field"
                    colors={colors}
                    onChange={handleChangeEvent}
                    value={value}
                />
            </div>
        </form>
    )
}

export default TaskForm;