import { ReactNode } from 'react'

interface SkillBoxProps {
	children?: ReactNode
}

export default function SkillBox(props: SkillBoxProps) {
	return <div className="flex flex-row gap-x-2 items-center justify-center p-3 rounded-xl bg-slate-200 text-black">{props.children}</div>
}
