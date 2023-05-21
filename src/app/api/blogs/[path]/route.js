import { NextResponse } from 'next/server';
import { editBlog, getBlog } from '@/utilities/api';

export async function GET(request, { params }) {
	return NextResponse.json(await getBlog(params.path));
}

export async function PATCH(request, { params }) {
	const body = await request.json();
	return NextResponse.json(await editBlog({ path: params.path, ...body }));
}
