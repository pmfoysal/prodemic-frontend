'use client';

import { useEffect, useState } from 'react';

export default function Theme() {
	const [mode, setMode] = useState('light');

	function updateTheme(theme) {
		document.documentElement.setAttribute('data-color-mode', theme);
		localStorage.setItem('prodemicTheme', theme);
	}

	function handleTheme() {
		setMode(prev => {
			if (prev === 'light') {
				updateTheme('dark');
				return 'dark';
			} else {
				updateTheme('light');
				return 'light';
			}
		});
	}

	useEffect(() => {
		const theme = localStorage.getItem('prodemicTheme');
		if (theme) {
			setMode(theme);
			updateTheme(theme);
		}
	}, []);

	return (
		<button type='button' className='header-theme' onClick={handleTheme}>
			<span>
				{mode === 'light' ? (
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M12 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2Zm0 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm0-1.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7Zm9.25-2.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM12 19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19Zm-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Zm-.03-8.53a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Zm1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06l-1.5 1.5Zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06Zm-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06l1.5 1.5Z'
						/>
					</svg>
				) : (
					<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M20.026 17.001c-2.762 4.784-8.879 6.423-13.663 3.661A9.965 9.965 0 0 1 3.13 17.68a.75.75 0 0 1 .365-1.132c3.767-1.348 5.785-2.91 6.956-5.146c1.232-2.353 1.551-4.93.689-8.463a.75.75 0 0 1 .769-.927a9.961 9.961 0 0 1 4.457 1.327c4.784 2.762 6.423 8.879 3.66 13.662Zm-8.248-4.903c-1.25 2.389-3.31 4.1-6.817 5.499a8.49 8.49 0 0 0 2.152 1.766a8.502 8.502 0 0 0 8.502-14.725a8.484 8.484 0 0 0-2.792-1.015c.647 3.384.23 6.043-1.045 8.475Z'
						/>
					</svg>
				)}
			</span>
		</button>
	);
}
