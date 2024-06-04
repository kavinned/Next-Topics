import { NextResponse } from "next/server";
import connect from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function POST(req) {
	const { title, description } = await req.json();
	await connect();
	await Topic.create({ title, description });
	return NextResponse.json(
		{ message: "Topic created successfully" },
		{ status: 201 }
	);
}

export async function GET() {
	await connect();
	const topics = await Topic.find();
	return NextResponse.json({ topics }, { status: 200 });
}

export async function DELETE(req) {
	const id = req.nextUrl.searchParams.get("id");
	await connect();
	await Topic.findByIdAndDelete(id);
	return NextResponse.json(
		{ message: "Topic deleted successfully" },
		{ status: 200 }
	);
}
