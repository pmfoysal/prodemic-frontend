import db from '@/utilities/database';

export async function getBlog(path = '') {
	const collection = await db();
	return collection.findOne({ path });
}

export async function addBlog(data) {
	const collection = await db();
	return collection.insertOne(data);
}
