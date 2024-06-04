import Link from "next/link";
import React from "react";

export default function NavBar() {
	return (
		<nav className="flex justify-between items-center py-3 px-8 bg-slate-800">
			<Link className="text-white font-bold" href="/">
				Home
			</Link>
			<Link className="text-white font-bold p-2" href="/addTopic">
				Add Topic
			</Link>
		</nav>
	);
}
