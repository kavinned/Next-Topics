import EditTopicForm from "@/app/components/EditTopicForm";
import React from "react";

const getTopicById = async (id) => {
	try {
		const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
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

export default async function editTopic({ params }) {
	const {
		topic: { title, description },
	} = await getTopicById(params.id);

	return (
		<EditTopicForm id={params.id} title={title} description={description} />
	);
}
