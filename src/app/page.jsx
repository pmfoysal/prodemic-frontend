import { htmlToText } from 'html-to-text';
import { getBlog } from '@/utilities/api';
import Details from '@/components/details';
import { toString } from 'mdast-util-to-string';
import { fromMarkdown } from 'mdast-util-from-markdown';

export async function generateMetadata({ params }) {
	const res = await getBlog(params.path);
	const content = htmlToText(toString(fromMarkdown(res?.data?.content)), {
		wordwrap: false,
		selectors: [{ selector: 'img', format: 'skip' }],
	}).replace(/[\n ]+/g, ' ');

	return {
		title: `${res?.data?.author?.name}'s Strain - ${content?.slice(0, 80)}...`,
		description: content?.slice(0, 200),
		icons: { shortcut: res?.data?.author?.image },
	};
}

export default async function Home() {
	const res = await getBlog(params.path);
	return <Details blog={res?.data} />;
}
