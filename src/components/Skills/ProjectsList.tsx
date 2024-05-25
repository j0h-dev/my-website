import Lavida from "../Projects/Lavida";
import MySpotifyPlaylistSorter from "../Projects/MySpotifyPlaylistSorter";
import NuxtUIComponentCollection from "../Projects/NuxtUIComponentCollection";
import RiftBot from "../Projects/RiftBot";
import VarausApp from "../Projects/VarausApp";
import YTDLPWebApp from "../Projects/YTDLPWebApp";

export default function ProjectsList() {
  return (
    <div className="flex flex-col w-full divide-y">
      <Lavida />
      <NuxtUIComponentCollection />
      <MySpotifyPlaylistSorter />
      <VarausApp />
      <RiftBot />
      <YTDLPWebApp />
    </div>
  );
}
