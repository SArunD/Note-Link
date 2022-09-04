import { SiChainlink } from 'react-icons/si'

const Header = () => {
	return (
    <header>
      <SiChainlink className="main-icon" />
			<nav>
				<a href="/dashboard">Dashboard</a>
				<a href="/add-note">Add Note</a>
			</nav>
		</header>
	)
}

export default Header
