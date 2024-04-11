import Lavida from "./Projects/Lavida";
import NuxtUIComponentCollection from "./Projects/NuxtUIComponentCollection";
import MySpotifyPlaylistSorter from "./Projects/MySpotifyPlaylistSorter";
import VarausApp from "./Projects/VarausApp";
import RiftBot from "./Projects/RiftBot";

export default function ProjectsList() {
	return (
		<div className="flex flex-col w-full divide-y">
			<Lavida />
			<NuxtUIComponentCollection />
			<MySpotifyPlaylistSorter />
			<VarausApp />
			<RiftBot />
		</div>
	);
}
