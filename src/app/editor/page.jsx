import Editor from '@/components/editor';
import { getBlog } from '@/utilities/api';
import { htmlToText } from 'html-to-text';
import { toString } from 'mdast-util-to-string';
import { fromMarkdown } from 'mdast-util-from-markdown';

export async function generateMetadata({ params }) {
	const res = await getBlog(params.path);
	const content = htmlToText(toString(fromMarkdown(res?.data?.content)), {
		wordwrap: false,
		selectors: [{ selector: 'img', format: 'skip' }],
	}).replace(/[\n ]+/g, ' ');

	return {
		title: `${res?.data?.author?.name}'s Strain - Editor`,
		description: content?.slice(0, 200),
		icons: { shortcut: res?.data?.author?.image },
	};
}

export default async function Page({ params }) {
	const res = await getBlog(params.path);
	return <Editor blog={res?.data} />;
}
