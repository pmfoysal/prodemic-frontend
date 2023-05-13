import Editor from '@/components/editor';
import { getBlog } from '@/utilities/api';

export async function generateMetadata({ params }) {
	const blog = await getBlog(params.path);
	const content = blog?.content || '';

	return {
		title: 'Prodemic - Content Editor',
		description: content?.slice(0, 200),
	};
}

export default async function Page({ params }) {
	return <Editor blog={await getBlog(params.path)} />;
}
