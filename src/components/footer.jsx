import Link from 'next/link';

export default function Footer() {
	function getYear() {
		const year = new Date().getFullYear();
		if (year === 2023) return '2023';
		else return `2023 - ${year}`;
	}

	return (
		<footer className='footer'>
			<main className='container'>
				&copy; {getYear()} &bull; Prodemic | All Rights Reserved |{' '}
				<Link href='https://pmfoysal.netlify.app' target='_blank'>
					@pmfoysal
				</Link>
			</main>
		</footer>
	);
}
