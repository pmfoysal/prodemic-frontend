import { NextResponse } from 'next/server';
import { addBlog, getBlog } from '@/utilities/api';

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const path = searchParams.get('isvalid');
	const data = await getBlog(path);
	return NextResponse.json({ status: 200, isValid: !data?._id });
}

export async function POST(request) {
	const body = await request.json();
	const data = await addBlog(body);
	return NextResponse.json(data);
}
