import { useRouteMatch, Link } from 'react-router-dom'
import {LIST_COPY, LIST_COLORS } from '../../config'
import notFoundIcon from '../../assets/not-found.svg'
import css from './TaskDetail.module.css'

const TaskDetail = (props) => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks} = props
	const task = tasks.find(task => task.id === taskId)


	const renderTaskDetails = () => {
		return (
			<>
				<div className={css.header}>
					<h2 className={css.title}>{task.title}</h2>
					<p className={css.status} style={{background: LIST_COLORS[task.status]}}>{LIST_COPY[task.status]}</p>
				</div>
				<p>{task.description || 'No description added yet'}</p>
			</>
		)
	}

	const renderEmptyState = () => {
		return (
			<div className={css.emptyState}>
				<h2>Task with ID <em>{taskId}</em> was not found</h2>
				<img className={css.emptyStateIcon} src={notFoundIcon} alt='' />
			</div>
		)
	}

	return (
		<>
			<Link to='/' className={css.homeLink}>&#8592; Back</Link>
			<div className={css.wrapper}>
				{task ? renderTaskDetails() : renderEmptyState()}
			</div>
		</>
	)
}

export default TaskDetail
