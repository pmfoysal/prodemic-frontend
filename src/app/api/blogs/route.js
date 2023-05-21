import { NextResponse } from 'next/server';
import { addBlog, getBlogs } from '@/utilities/api';

export async function GET(request) {
	return NextResponse.json(await getBlogs());
}

export async function POST(request) {
	const body = await request.json();
	return NextResponse.json(await addBlog(body));
}
