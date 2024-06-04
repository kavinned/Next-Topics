import connect from "../../../../../libs/mongodb";
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
	const { id } = params;
	await connect();
	const topic = await Topic.findById(id);
	return NextResponse.json({ topic }, { status: 200 });
}

export async function PUT(req, { params }) {
	const { id } = params;
	const { title, description } = await req.json();
	await connect();
	await Topic.findByIdAndUpdate(id, { title, description });
	return NextResponse.json(
		{ message: "Topic updated successfully" },
		{ status: 200 }
	);
}
