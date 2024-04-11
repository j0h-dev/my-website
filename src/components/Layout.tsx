import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<>
			<Header />

			<main className="flex flex-col items-center w-full h-full my-2 px-4">
				<div className="max-w-7xl w-full">{children}</div>
			</main>

			<Footer />
		</>
	);
}
