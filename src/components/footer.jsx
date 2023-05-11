import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<main>
				&copy; 2023 &bull; Prodemic | All Rights Reserved |{' '}
				<Link href='https://pmfoysal.netlify.app' target='_blank'>
					Foysal Ahmmed
				</Link>
			</main>
		</footer>
	);
}
