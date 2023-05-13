export default function isURL(url) {
	try {
		const newUrl = new URL(url);
		return newUrl.protocol === 'http:' || newUrl.protocol === 'https:' || newUrl.protocol === 'ftp:';
	} catch (err) {
		return false;
	}
}
