import React from "react";
import css from "./Options.module.css"


function Options (props) {

    let filtredTasks

    const {currentTasks, listTitle, setTasks} = props

    const handleChange = e => {
        const newStatus = e.target.value

        if (newStatus) {
            const updatedTasks = currentTasks.map(task => {
                if (task.title === e.target.selectedOptions[0].innerHTML) {
                    return {...task, status: newStatus}
                }
                return task
            })
            setTasks(updatedTasks)
        }    
    }

    switch (listTitle) {
        case 'ready':
            filtredTasks = currentTasks.filter(task => task.status === 'backlog')
            break;
        case 'inProgress':
            filtredTasks = currentTasks.filter(task => task.status === 'ready')    
            break;
        case 'finished' :
            filtredTasks = currentTasks.filter(task => task.status === 'inProgress')
            break;    
    }

    return (
        <div className={css.selectWrapper}>
            <select onChange={handleChange}>
                <option value="">Select task :</option>
                {filtredTasks.map(task => {
                    return (
                        <option key={task.id} value={listTitle} id={task.id}>{task.title}</option>
                    )
                })}
            </select>
            <div className={css.selectArrow}></div>
        </div>
  )
    
}

export default Options