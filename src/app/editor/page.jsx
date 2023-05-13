import Editor from '@/components/editor';
import { getBlog } from '@/utilities/api';

export async function generateMetadata() {
	const blog = await getBlog();
	const content = blog?.content || '';

	return {
		title: 'Prodemic - Content Editor',
		description: content?.slice(0, 200),
	};
}

export default async function Page() {
	return <Editor blog={await getBlog()} />;
}
