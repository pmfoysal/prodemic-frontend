import Link from 'next/link';
import Preview from './preview';

export default function Details() {
	return (
		<section className='details'>
			<img
				className='thumbnail'
				src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920'
				alt='Thumbnail'
			/>
			<main className='container'>
				<nav className='info-area'>
					<aside className='info-left'>
						<Link href='https://pmfoysal.netlify.app' target='_blank' className='profile'>
							<img
								src='https://avatars.githubusercontent.com/u/79983010?v=4'
								alt='User'
								className='h-12 w-auto'
							/>
							Foysal Ahmmed
						</Link>
						<div className='date'>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M6.25 3A3.25 3.25 0 0 0 3 6.25v2.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75V7H6a.758.758 0 0 0-.1.006c.397.035.784.203 1.087.507c.278.278.443.626.495.987H19.5v9.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-4a.75.75 0 0 0-1.5 0v4A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25Zm1.5 11.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z'
								/>
							</svg>
							<p>09 May 2023</p>
						</div>
						<div className='date'>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M12 9.005a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365a8.504 8.504 0 0 0-16.493.004a.75.75 0 0 1-1.456-.363A10.003 10.003 0 0 1 12 5.5Z'
								/>
							</svg>
							<p>230 views</p>
						</div>
					</aside>
					<aside className='info-right'>
						<button type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v4.762a3.294 3.294 0 0 0-1.5.22V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h5.291a3.329 3.329 0 0 0-.02.077L11.165 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM15.355 15l-1.5 1.5H11.25a.75.75 0 1 1 0-1.5h4.105ZM7.75 9.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM10.5 12a.75.75 0 0 1 .75-.75h5.5a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-2.75 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm0 3.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm11.35-4.08l-5.903 5.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67Z'
								/>
							</svg>
						</button>
						<button type='button'>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M17 2.498a3.502 3.502 0 1 1-2.597 5.851l-4.558 2.604a3.5 3.5 0 0 1 0 2.093l4.557 2.606a3.502 3.502 0 1 1-.745 1.302L9.1 14.347a3.502 3.502 0 1 1 0-4.698l4.557-2.604A3.502 3.502 0 0 1 17 2.498Zm0 13.5a2.002 2.002 0 1 0 0 4.004a2.002 2.002 0 0 0 0-4.004Zm-10.498-6a2.002 2.002 0 1 0 0 4.004a2.002 2.002 0 0 0 0-4.004Zm10.498-6a2.002 2.002 0 1 0 0 4.004a2.002 2.002 0 0 0 0-4.004Z'
								/>
							</svg>
						</button>
					</aside>
				</nav>
				<Preview
					source={`# Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea architecto, officia quam corrupti dolor quaerat esse odit error harum delectus debitis ipsa eos saepe \n repudiandae, provident quis! Recusandae eligendi inventore iusto necessitatibus quis! Odio, nulla porro. Adipisci nostrum eveniet deserunt quaerat voluptate porro, excepturi quos maxime expedita laboriosam nam officiis.`}
				/>
			</main>
		</section>
	);
}
