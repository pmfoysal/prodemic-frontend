import Theme from './theme';
import Link from 'next/link';

export default function Header() {
	return (
		<header className='header'>
			<main className='container'>
				<nav className='header-brand'>
					<img src='/logo.png' alt='Prodemic Logo' />
					<h1>World Positive Virus</h1>
				</nav>
				<nav className='header-menus'>
					<Link href='/recents'>Recents</Link>
					<Link href='/leaderboard'>Leaderboard</Link>
					<Theme />
				</nav>
			</main>
		</header>
	);
}
