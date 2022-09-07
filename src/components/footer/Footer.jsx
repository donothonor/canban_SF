import {LIST_TYPES, LIST_COPY} from '../../config'
import css from './Footer.module.css'

function Footer(props) {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES).map(type => {
					const listTasks = tasks.filter(task => task.status === type)
					if (!listTasks.length) return null;
					return (
						<p className={css.count} key={LIST_COPY[type]}>{LIST_COPY[type]}: {listTasks.length}</p>
					)
				})}
			</div>
			<div className={css.copy}>
				<p>Kanban board by <a href='https://github.com/donothonor' target='_blank' rel='noreferrer'>@donothonor</a>, 2022</p>	
			</div>
		</footer>
	)
}

export default Footer
