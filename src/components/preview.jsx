'use client';
import dynamic from 'next/dynamic';
import rehypeSanitize from 'rehype-sanitize';

const Markdown = dynamic(() => import('@uiw/react-md-editor').then(mod => mod.default.Markdown), { ssr: false });

export default function Preview({ source }) {
	return (
		<div data-color-mode='light' className='preview'>
			<Markdown
				source={source}
				rehypePlugins={{
					rehypePlugins: [[rehypeSanitize]],
				}}
			/>
		</div>
	);
}
