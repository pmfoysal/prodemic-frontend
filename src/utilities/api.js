const blogs = `${process.env.SERVER_URL || ''}/api/blogs`;

const cachePolicy = {
	next: { cache: 'no-store' },
};

export async function getBlog(path = 'home') {
	const res = await fetch(`${blogs}/${path}`, cachePolicy);
	return await res.json();
}

export async function getBlogs() {
	const res = await fetch(blogs, cachePolicy);
	return await res.json();
}

export async function editBlog({ path, ...data }) {
	const res = await fetch(`${blogs}/${path}`, {
		...cachePolicy,
		method: 'PATCH',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	});
	return await res.json();
}

export async function addBlog(data) {
	const res = await fetch(blogs, {
		...cachePolicy,
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	});
	return await res.json();
}
