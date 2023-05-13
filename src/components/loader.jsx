'use client';
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
	return (
		<section className='loader'>
			<main className='content'>
				<Triangle height='80' width='80' color='#8b5cf6' visible={true} />
				<h1>Prodemic</h1>
			</main>
		</section>
	);
}
