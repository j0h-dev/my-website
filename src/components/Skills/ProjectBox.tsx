export default function ProjectBox({ children }: React.PropsWithChildren) {
	return <div className="flex xl:flex-row flex-col gap-x-14 gap-y-6 items-center py-20 first:pt-8 px-2">{children}</div>;
}
