import Theme from './theme';

export default function Header() {
	return (
		<header className='header'>
			<main className='container'>
				<nav className='header-brand'>
					<img src='/logo.png' alt='Prodemic Logo' />
					<h1>Prodemic</h1>
				</nav>
				<nav className='header-menus'>
					<a>Blogs</a>
					<a>About Us</a>
					<a>Services</a>
					<Theme />
				</nav>
			</main>
		</header>
	);
}
