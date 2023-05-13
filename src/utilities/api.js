import db from '@/utilities/database';

export async function getBlog(path = '') {
	const collection = await db();
	await collection.updateOne({ path }, { $inc: { views: 1 } });
	const data = await collection.findOne({ path });
	return JSON.parse(JSON.stringify(data));
}

export async function addBlog(data) {
	const collection = await db();
	return collection.insertOne(data);
}
