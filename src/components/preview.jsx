'use client';
import Loader from './loader';
import dynamic from 'next/dynamic';
import rehypeSanitize from 'rehype-sanitize';

const Markdown = dynamic(() => import('@uiw/react-md-editor').then(mod => mod.default.Markdown), {
	ssr: false,
	loading: () => <Loader />,
});

export default function Preview({ source }) {
	return (
		<div className='preview'>
			<Markdown
				source={source}
				rehypePlugins={{
					rehypePlugins: [[rehypeSanitize]],
				}}
			/>
		</div>
	);
}
