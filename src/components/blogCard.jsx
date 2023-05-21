import Link from 'next/link';
import { htmlToText } from 'html-to-text';
import { toString } from 'mdast-util-to-string';
import getDateTime from '@/utilities/getDateTime';
import { fromMarkdown } from 'mdast-util-from-markdown';

export default function BlogCard({ blog }) {
	function getTitle() {
		return htmlToText(toString(fromMarkdown(blog.content)), {
			wordwrap: false,
			selectors: [{ selector: 'img', format: 'skip' }],
		}).replace(/[\n ]+/g, ' ');
	}

	return (
		<Link href={`/${blog.path}`}>
			<article className='blog-card'>
				<nav className='top-area'>
					<div className='user-area'>
						<img src={blog.author.image} alt={blog.author.name} />
						<h3>{blog.author.name}</h3>
					</div>
					<p>
						<span>Total Views:</span> {blog.views}
					</p>
					<p>
						<span>Published:</span> {getDateTime(blog.createdAt)}
					</p>
					<p>
						<span>Last Read:</span> {getDateTime(blog.updatedAt)}
					</p>
				</nav>
				<h1>{getTitle()}</h1>
			</article>
		</Link>
	);
}
