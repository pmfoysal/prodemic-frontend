const blogs = `${process.env.SERVER_URL}/api/blogs`;

export async function getBlog(path = 'home') {
	const res = await fetch(`${blogs}/${path}`);
	return await res.json();
}

export async function getBlogs() {
	const res = await fetch(blogs);
	return await res.json();
}

export async function editBlog({ path, ...data }) {
	const res = await fetch(`${blogs}/${path}`, { method: 'PATCH', body: data });
	return await res.json();
}

export async function addBlog(data) {
	const res = await fetch(blogs, { method: 'POST', body: data });
	return await res.json();
}
