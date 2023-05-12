import { getBlog } from '@/utilities/api';
import Details from '@/components/details';

export async function generateMetadata() {
	const blog = await getBlog();
	const content = blog?.content || '';

	return {
		title: `Prodemic - ${content?.slice(0, 80)}`,
		description: content?.slice(0, 200),
	};
}

export default async function Home() {
	return <Details blog={await getBlog()} />;
}
