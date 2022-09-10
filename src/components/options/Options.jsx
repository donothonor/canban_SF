import { useRouteMatch, Link } from 'react-router-dom'
import React from "react";
import css from "./Options.module.css"
import {LIST_TYPES} from '../../config'


function Options (props) {

    let filtredTasks

    const match = useRouteMatch()
	const {taskId} = match.params

    const {currentTasks, listTitle, setTasks} = props

    const handleChange = e => {
        console.log(e)
        const newStatus = e.target.value
        const updatedTasks = currentTasks.map(task => {
			if (task.title === e.target.selectedOptions[0].innerHTML) {
				return {...task, status: newStatus}
			}
			return task
		})
		setTasks(updatedTasks)
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