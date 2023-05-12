import db from '@/utilities/database';

export default async function getBlog(path = '/') {
	const collection = await db();
	return collection.findOne({ path });
}
