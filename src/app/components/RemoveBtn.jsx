"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidTrash } from "react-icons/bi";

export default function RemoveBtn({ id }) {
	const router = useRouter();
	const removeTopic = async () => {
		const confirmed = confirm("Are you sure you want to delete this topic?");

		if (confirmed) {
			const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
				method: "DELETE",
			});
			if (res.ok) {
				router.refresh();
			}
		}
	};

	return (
		<button onClick={removeTopic} className="text-red-400">
			<BiSolidTrash />
		</button>
	);
}
