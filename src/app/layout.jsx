import './globals.css';
import meta from '@/assets/meta';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { openSans } from '@/assets/fonts';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

export const metadata = meta;

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${openSans.className} bg-slate-100`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
