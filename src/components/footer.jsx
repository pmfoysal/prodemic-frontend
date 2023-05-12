import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='footer'>
			<main className='container'>
				&copy; 2023 &bull; Prodemic | All Rights Reserved |{' '}
				<Link href='https://pmfoysal.netlify.app' target='_blank'>
					@pmfoysal
				</Link>
			</main>
		</footer>
	);
}
