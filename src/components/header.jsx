import Link from 'next/link';

export default function Header() {
	return (
		<header className='header'>
			<main className='container'>
				<nav className='header-brand'>
					<img src='/logo.png' alt='Prodemic Logo' />
					<h1>Prodemic</h1>
				</nav>
				<nav className='header-menus'>
					<Link href='/'>About Us</Link>
					<Link href='/'>Blogs</Link>
					<Link href='/'>News</Link>
					<Link href='/'>Services</Link>
				</nav>
			</main>
		</header>
	);
}
