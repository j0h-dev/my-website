import { ReactNode } from "react";

export default function SkillBox({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-row gap-x-2 items-center justify-center px-3 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-100">
			{children}
		</div>
	);
}
