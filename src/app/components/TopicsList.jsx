import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { AiOutlineEdit } from "react-icons/ai";

const getTopics = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/topics", {
			cache: "no-store",
		});
		if (!res.ok) {
			throw new Error("Failed to fetch topics");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default async function TopicsList() {
	const { topics } = await getTopics();

	return (
		<>
			{topics?.map((topic) => {
				return (
					<div
						key={topic._id}
						className="p-4 border-slate-300 border flex my-3 justify-between gap-5 items-start"
					>
						<div>
							<h2 className="font-bold text-2xl">{topic.title}</h2>
							<div>{topic.description}</div>
						</div>
						<div className="flex gap-2">
							<RemoveBtn id={topic?._id} />
							<Link href={`/editTopic/${topic._id}`}>
								<AiOutlineEdit />
							</Link>
						</div>
					</div>
				);
			})}
		</>
	);
}
