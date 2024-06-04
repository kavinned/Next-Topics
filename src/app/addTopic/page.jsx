"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AddTopic() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!title || !description) {
			alert("Please fill in all fields");
			return;
		}
		try {
			const res = await fetch("http://localhost:3000/api/topics", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title, description }),
			});
			if (res.ok) {
				router.push("/");
				router.refresh();
			} else {
				throw new Error("Failed to add topic");
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
			<input
				onChange={(e) => setTitle(e.target.value)}
				value={title}
				type="text"
				placeholder="Topic Title"
				className="border border-slate-500 px-8 py-2"
			/>
			<input
				onChange={(e) => setDescription(e.target.value)}
				value={description}
				type="text"
				placeholder="Topic Description"
				className="border border-slate-500 px-8 py-2"
			/>
			<button
				type="submit"
				className="bg-green-600 font-bold text-white py-3 px-6 w-fit border border-slate-500"
			>
				Add Topic
			</button>
		</form>
	);
}
