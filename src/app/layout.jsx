import './globals.css';
import meta from '@/assets/meta';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { openSans } from '@/assets/fonts';
import Toaster from '@/components/toaster';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

export const metadata = meta;

export default function RootLayout({ children }) {
	return (
		<html lang='en' data-color-mode='dark'>
			<body className={openSans.className} suppressHydrationWarning={true}>
				<Header />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
