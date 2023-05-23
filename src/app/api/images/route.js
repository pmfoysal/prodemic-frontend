import { NextResponse } from 'next/server';
import { uploadImage } from '@/utilities/api';

export async function POST(request) {
	const body = await request.formData();
	return NextResponse.json(await uploadImage(body));
}
