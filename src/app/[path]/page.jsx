import meta from '@/assets/meta';
import { getBlog } from '@/utilities/api';
import Details from '@/components/details';

export async function generateMetadata({ params }) {
	const blog = await getBlog(params.path);
	const content = blog?.content || '';

	return {
		...meta,
		title: `Prodemic - ${content?.slice(0, 80)}...`,
		description: content?.slice(0, 200),
	};
}

export default async function Home({ params }) {
	console.log(params.path);
	return <Details blog={await getBlog(params.path)} />;
}
