import ParticleBackground from "./ParticleBackground";

export default function Header() {
	return (
		<div className="grid grid-cols-1 grid-rows-1 w-full justify-center items-center place-items-center min-h-[60vh]">
			<ParticleBackground className="-z-10 object-cover max-h-[60vh] w-full h-full top-0 col-start-1 row-start-1" />

			<div className="flex flex-col w-4/5 gap-y-4 col-start-1 row-start-1">
				<h1 className="flex flex-col gap-y-4 lg:text-7xl text-5xl text-slate-100 font-semibold select-none">
					<p>Hello world!</p>
					<p>
						My name is <span className="text-[#006cc6]">Jaro</span>
					</p>
				</h1>
				<p className="md:text-2xl text-lg">I do cool stuff with computers</p>
			</div>
		</div>
	);
}
