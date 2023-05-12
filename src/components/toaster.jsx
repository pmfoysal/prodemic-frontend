import { Toaster as RHT } from 'react-hot-toast';

export default function Toaster() {
	return <RHT position='top-center' gutter={8} toastOptions={{ duration: 2500 }} />;
}
