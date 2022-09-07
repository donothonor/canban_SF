import css from './Header.module.css'
import LogUser from '../log_user/LogUser'

function Header() {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<div>
				<LogUser />
			</div>
		</header>
	)
}

export default Header
