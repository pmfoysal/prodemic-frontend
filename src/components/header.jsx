import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<main>
				<nav>
					<img src='/logo.png' alt='Prodemic Logo' />
					<h1>Prodemic</h1>
				</nav>
				<nav>
					<Link href='/'>Home</Link>
					<Link href='/'>About Us</Link>
					<Link href='/'>Blogs</Link>
					<Link href='/'>News</Link>
					<Link href='/'>Services</Link>
				</nav>
			</main>
		</header>
	);
}
