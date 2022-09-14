import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES} from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import Options from '../options/Options'
import css from './List.module.css'

const List = props => {
	const {type, title, tasks, addNewTask, currentTasks, setTasks} = props
	const [isFormVisible, setFormVisible] = useState(false)

	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

	const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}

	const backlogTasks = currentTasks.filter(task => task.status === 'backlog'),
		  readyTasks = currentTasks.filter(task => task.status === 'ready'),
		  inProgressTasks = currentTasks.filter(task => task.status === 'inProgress')

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.length? 
				tasks.map(task => 
					<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
						<div className={css.task}>{task.title}</div>
					</Link>
			) : 
					<p>No tasks added yet</p>
			}

			{type === LIST_TYPES.READY && !isFormVisible && (<button onClick={handleAddNewClick} disabled={!backlogTasks.length}  className={css.addButton}>+ Add card</button>)}
			{type === LIST_TYPES.IN_PROGRESS && !isFormVisible && (<button onClick={handleAddNewClick} disabled={!readyTasks.length}  className={css.addButton}>+ Add card</button>)}
			{type === LIST_TYPES.FINISHED && !isFormVisible && (<button onClick={handleAddNewClick} disabled={!inProgressTasks.length}  className={css.addButton}>+ Add card</button>)}
			{type === LIST_TYPES.BACKLOG && !isFormVisible && <button onClick={handleAddNewClick}  className={css.addButton}>+ Add card</button>}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (<FormAddNewTask formSubmit={formSubmit} />)}
			{type !== LIST_TYPES.BACKLOG && isFormVisible &&  (<Options currentTasks={currentTasks} listTitle={type} setTasks={setTasks}/>)}
		</div>
	)
}

export default List
