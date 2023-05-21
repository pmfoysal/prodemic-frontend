'use client';
import Loader from './loader';
import dynamic from 'next/dynamic';
import isURL from '@/utilities/isUrl';
import { toast } from 'react-hot-toast';
import isString from '@/utilities/isString';
import { useRouter } from 'next/navigation';
import rehypeSanitize from 'rehype-sanitize';
import { addBlog, getBlog } from '@/utilities/api';
import { useEffect, useRef, useState } from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then(mod => mod.default), {
	ssr: false,
	loading: () => <Loader />,
});

export default function Editor({ blog }) {
	const timeOutId = useRef();
	const router = useRouter();
	const [url, setUrl] = useState('');
	const [name, setName] = useState('');
	const [path, setPath] = useState('');
	const [image, setImage] = useState('');
	const [value, setValue] = useState('');
	const [alert, setAlert] = useState({});

	const icons = {
		success: (
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
				<path
					fill='currentColor'
					d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Zm-1.25 9.94l4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084l-5 5a.75.75 0 0 1-.976.073l-.084-.073l-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073l1.97 1.97l4.47-4.47l-4.47 4.47Z'
				/>
			</svg>
		),
		error: (
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
				<path
					fill='currentColor'
					d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Zm3.446 4.897l.084.073a.75.75 0 0 1 .073.976l-.073.084L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072Z'
				/>
			</svg>
		),
		loading: (
			<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
				<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-width='2'>
					<path
						stroke-dasharray='60'
						stroke-dashoffset='60'
						stroke-opacity='.3'
						d='M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z'>
						<animate fill='freeze' attributeName='stroke-dashoffset' dur='1.3s' values='60;0' />
					</path>
					<path stroke-dasharray='15' stroke-dashoffset='15' d='M12 3C16.9706 3 21 7.02944 21 12'>
						<animate fill='freeze' attributeName='stroke-dashoffset' dur='0.3s' values='15;0' />
						<animateTransform
							attributeName='transform'
							dur='1.5s'
							repeatCount='indefinite'
							type='rotate'
							values='0 12 12;360 12 12'
						/>
					</path>
				</g>
			</svg>
		),
	};

	function getUrl(url) {
		return url
			?.toLowerCase()
			?.replace(/[ -]+/g, '-')
			?.replace(/[^a-z0-9-_]+/g, '');
	}

	function isValid() {
		const urlOk = isURL(url);
		const nameOk = isString(name);
		const imageOk = isURL(image);
		const valueOk = isString(value);
		return urlOk && nameOk && imageOk && valueOk;
	}

	function handleCancel() {
		router.push(location.pathname.replace(/\/editor$/g, ''));
	}

	async function handleSave() {
		if (!isValid()) return;
		const data = {
			path,
			views: 0,
			author: { name, image, url },
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			content: value,
		};
		const tId = toast.loading('Publishing...');
		const res = await addBlog(data);
		if (res?.data?.acknowledged) {
			toast.success('Published!', { id: tId });
			router.push(`/${path}`);
		} else {
			toast.error('Something went wrong!', { id: tId });
		}
	}

	useEffect(() => {
		timeOutId.current = setTimeout(async () => {
			setAlert({ type: 'loading', title: 'Checking for unique ID!' });
			const res = await getBlog(path);
			if (!res?.data?.path && path.trim().length) {
				setAlert({ type: 'success', title: 'This unique ID is available!' });
			} else setAlert({ type: 'error', title: 'This unique ID is not available!' });
		}, 1000);
		return () => clearTimeout(timeOutId.current);
	}, [path]);

	useEffect(() => {
		if (blog?._id) {
			setImage(blog.author.image);
			setUrl(blog.author.url);
			setName(blog.author.name);
			setPath(blog.path);
			setValue(blog.content);
		}
	}, [blog]);

	return (
		<section className='editor'>
			<main className='container'>
				<div className='editor-header'>
					<h1>{name}&apos;s Strain - Editor</h1>
					<div className='editor-buttons'>
						<button type='button' title='Cancel' onClick={handleCancel}>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Zm3.446 4.897l.084.073a.75.75 0 0 1 .073.976l-.073.084L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072Z'
								/>
							</svg>
						</button>
						<button
							type='button'
							title='Publish'
							disabled={alert?.type !== 'success' || !isValid()}
							onClick={handleSave}>
							<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M18.5 20a.5.5 0 0 1-.5.5h-5v1c0 .171-.017.338-.05.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828a.491.491 0 0 0-.049-.04a.63.63 0 0 1-.036-.03a2.072 2.072 0 0 0-.219-.18a.652.652 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138a.56.56 0 0 1-.059-.007a.605.605 0 0 0-.082-.007H6a2 2 0 0 0-2 2v7h1.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10Zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5V4.621ZM5 12h3v2H5v-2Zm-2.5 0H4v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V12h.379a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 1 12 14.622V21.5a1.5 1.5 0 0 1-1.5 1.5H10v-5.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V23h-.5A1.5 1.5 0 0 1 1 21.5v-8A1.5 1.5 0 0 1 2.5 12ZM9 18v5H4v-5h5Z'
								/>
							</svg>
						</button>
					</div>
				</div>
				<article className='info-inputs'>
					<div className='input-group'>
						<div className={`input-box ${alert?.type}`}>
							<input
								type='text'
								className='input'
								placeholder='Unique ID'
								value={path}
								onChange={e => setPath(getUrl(e.target.value))}
							/>
							{alert?.type ? (
								<span className='input-icon' title={alert?.title}>
									{icons[alert?.type]}
								</span>
							) : null}
						</div>
						<input
							type='text'
							className='input'
							placeholder='Your name'
							value={name}
							onChange={e => e.target.value.length < 36 && setName(e.target.value)}
						/>
					</div>
					<div className='input-group'>
						<input
							type='url'
							className='input'
							placeholder='Your website'
							value={url}
							onChange={e => setUrl(e.target.value)}
						/>
						<input
							type='url'
							className='input'
							placeholder='Your image url'
							value={image}
							onChange={e => setImage(e.target.value)}
						/>
					</div>
				</article>
				<article className='editor-preview'>
					<MDEditor
						height={450}
						value={value}
						onChange={setValue}
						previewOptions={{
							rehypePlugins: [[rehypeSanitize]],
						}}
					/>
				</article>
			</main>
		</section>
	);
}
