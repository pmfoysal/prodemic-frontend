import Link from 'next/link';
import Preview from './preview';

export default function Details() {
	return (
		<section>
			<main>
				<h1>Blog Details</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima vel inventore eos sit
					aspernatur sed ullam voluptatum, accusantium possimus!
				</p>
				<img
					src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200'
					alt='Thumbnail'
				/>
				<nav>
					<aside>
						<div>
							<img src='https://avatars.githubusercontent.com/u/79983010?v=4' alt='User' />
							<p>
								by
								<Link href='https://pmfoysal.netlify.app' target='_blank'>
									Foysal Ahmmed
								</Link>
							</p>
						</div>
						<div>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M6.25 3A3.25 3.25 0 0 0 3 6.25v2.69l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.72V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75V7H6a.758.758 0 0 0-.1.006c.397.035.784.203 1.087.507c.278.278.443.626.495.987H19.5v9.25a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-4a.75.75 0 0 0-1.5 0v4A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3H6.25Zm1.5 11.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z'
								/>
							</svg>
							<p>09 May 2023</p>
						</div>
						<div>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M12 9.005a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365a8.504 8.504 0 0 0-16.493.004a.75.75 0 0 1-1.456-.363A10.003 10.003 0 0 1 12 5.5Z'
								/>
							</svg>
							<p>230 views</p>
						</div>
					</aside>
					<aside>
						<button type='button'>Evolve</button>
						<button type='button'>Share</button>
					</aside>
				</nav>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellendus necessitatibus totam ducimus!
					Unde, doloremque.
				</h2>
				<Preview source='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea architecto, officia quam corrupti dolor quaerat esse odit error harum delectus debitis ipsa eos saepe repudiandae, provident quis! Recusandae eligendi inventore iusto necessitatibus quis! Odio, nulla porro. Adipisci nostrum eveniet deserunt quaerat voluptate porro, excepturi quos maxime expedita laboriosam nam officiis.' />
			</main>
		</section>
	);
}
