import { getBlogs } from '@/utilities/api';
import BlogCard from '@/components/blogCard';

export const metadata = {
	title: 'Prodemic - Highest Views positive viruses!',
	description:
		'A virus of positive thought created and mutated by every recipient who receives it. Turning our global network into an evolutionary function for the best piece of text imaginable. A quest for the holy grail of vibes.',
};

export default async function Page() {
	const blogs = await getBlogs();

	function sortBlogs(prev, next) {
		if (prev.views < next.views) return 1;
		else if (prev.views > next.views) return -1;
		return 0;
	}

	return (
		<section className='list-page'>
			<main className='container'>
				{blogs?.data?.sort(sortBlogs)?.map(blog => (
					<BlogCard key={blog.path} blog={blog} />
				))}
			</main>
		</section>
	);
}
