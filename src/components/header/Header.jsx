import css from './Header.module.css'

function Header() {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
		</header>
	)
}

export default Header
