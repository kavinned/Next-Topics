"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
	const [newTitle, setNewTitle] = useState(title);
	const [newDescription, setNewDescription] = useState(description);

	const router = useRouter();

	const handleSubmit = async (e) => {
		const confirmed = confirm("Are you sure you want to update this topic?");
		if (!confirmed) return;
		e.preventDefault();
		if (!newTitle || !newDescription) {
			alert("Please fill in all fields");
			return;
		}
		try {
			const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
				method: "PUT",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title: newTitle, description: newDescription }),
			});
			if (res.ok) {
				router.push("/");
			} else {
				throw new Error("Failed to update topic");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
			<input
				onChange={(e) => setNewTitle(e.target.value)}
				value={newTitle}
				type="text"
				placeholder="Topic Title"
				className="border border-slate-500 px-8 py-2"
			/>
			<input
				onChange={(e) => setNewDescription(e.target.value)}
				value={newDescription}
				type="text"
				placeholder="Topic Description"
				className="border border-slate-500 px-8 py-2"
			/>
			<button className="bg-green-600 font-bold text-white py-3 px-6 w-fit border border-slate-500">
				Update Topic
			</button>
		</form>
	);
}
