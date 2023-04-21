interface SkillBoxProps {
	name?: string
}

export default function SkillBox(props: SkillBoxProps) {
	return (
		<div className="p-3 rounded-xl bg-slate-200 text-black">
			<p>{props.name}</p>
		</div>
	)
}
