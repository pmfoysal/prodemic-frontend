import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y2qwo.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
	serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

export default async function db() {
	try {
		await client.connect();
		return client.db('prodemic').collection('blogs');
	} catch (error) {
		console.dir(error);
		throw new Error(error.message);
	}
}
