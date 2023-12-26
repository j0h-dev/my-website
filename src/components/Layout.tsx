export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<>
			<main>{children}</main>
			<div className="flex flex-col h-24 items-center justify-center text-slate-100">
				<p>@Made by Jaro Heinonen | {new Date().getFullYear()}</p>
			</div>
		</>
	)
}
