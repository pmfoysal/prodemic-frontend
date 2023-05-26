'use client';
import Theme from './theme';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
	const path = usePathname();
	const [isOpen, setIsOpen] = useState('false');

	useEffect(() => {
		setIsOpen(false);
	}, [path]);

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
				<div className={`mobile-menus ${isOpen ? 'active' : ''}`}>
					<button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(prev => !prev)}>
						<span></span>
					</button>
					<nav className='header-menus'>
						<Link href='/recents'>Recents</Link>
						<Link href='/leaderboard'>Leaderboard</Link>
						<Theme />
					</nav>
				</div>
			</main>
		</header>
	);
}
