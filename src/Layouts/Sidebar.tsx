import {
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import SmallSidebarItem from "../Components/SmallSidebarItem";
import LargeSidebarSection from "../Components/LargeSidebarSection";
import LargeSidebarItem from "../Components/LargeSidebarItem";
import { playlists, subscriptions } from "../Data/sidebar";
import { useSidebar } from "../Context/useSidebar";
import HeaderFirstSection from "../Components/HeaderFirstSection";

const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, close } = useSidebar();

  return (
    <>
      <aside
        className={`scrollbar-hidden sticky top-0 ml-1 flex flex-col overflow-y-auto pb-4  ${isLargeOpen ? "lg:hidden" : "lg:flex"}`}
      >
        <SmallSidebarItem IconOrImgUrl={Home} title={"Home"} path={"/"} />
        <SmallSidebarItem
          IconOrImgUrl={Repeat}
          title={"Shorts"}
          path={"/shorts"}
        />
        <SmallSidebarItem
          IconOrImgUrl={Clapperboard}
          title={"Subscriptions"}
          path={"/subscriptions"}
        />
        <SmallSidebarItem
          IconOrImgUrl={Library}
          title={"Library"}
          path={"/library"}
        />
      </aside>
      {isSmallOpen && (
        <div
          className="fixed inset-0 z-[999] bg-secondary-dark opacity-50 lg:hidden"
          onClick={close}
        ></div>
      )}
      <aside
        className={` absolute top-0 w-56 flex-col gap-2 px-2 pb-4 lg:sticky  ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "z-[999] flex max-h-[100%] bg-white" : "hidden"}`}
      >
        <div className="sticky top-0 bg-white px-2 pb-4 pt-2 lg:hidden">
          <HeaderFirstSection />
        </div>
        <div className="scrollbar-hidden overflow-y-auto">
          <LargeSidebarSection visibleItemCount={1}>
            <LargeSidebarItem
              IconOrImgUrl={Home}
              title={"Home"}
              path={"/"}
              isActive
            />
            <LargeSidebarItem
              IconOrImgUrl={Clapperboard}
              title={"Subscriptions"}
              path={"/subscriptions"}
            />
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection visibleItemCount={5}>
            <LargeSidebarItem
              IconOrImgUrl={Library}
              title="Library"
              path="/library"
            />
            <LargeSidebarItem
              IconOrImgUrl={History}
              title="History"
              path="/history"
            />
            <LargeSidebarItem
              IconOrImgUrl={PlaySquare}
              title="Your Video"
              path="/your-video"
            />
            <LargeSidebarItem
              IconOrImgUrl={Clock}
              title="Watch Later"
              path="/playlist?list=WL"
            />
            {playlists.map((playlist) => (
              <LargeSidebarItem
                IconOrImgUrl={ListVideo}
                title={playlist.name}
                path={`/playlist?list=${playlist.id}`}
                key={playlist.id}
              />
            ))}
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title="Subscriptions">
            {subscriptions.map((sub) => (
              <LargeSidebarItem
                IconOrImgUrl={sub.imgUrl}
                title={sub.channelName}
                path={`/@${sub.id}`}
                key={sub.id}
              />
            ))}
          </LargeSidebarSection>
          <hr />
          <LargeSidebarSection title="Explore">
            <LargeSidebarItem
              IconOrImgUrl={Flame}
              title="Trending"
              path="/trending"
            />
            <LargeSidebarItem
              IconOrImgUrl={ShoppingBag}
              title="Shopping"
              path="/shopping"
            />
            <LargeSidebarItem
              IconOrImgUrl={Music2}
              title="Music"
              path="/music"
            />
            <LargeSidebarItem
              IconOrImgUrl={Film}
              title="Movies & TV"
              path="/movies-tv"
            />
            <LargeSidebarItem IconOrImgUrl={Radio} title="Live" path="/live" />
            <LargeSidebarItem
              IconOrImgUrl={Gamepad2}
              title="Gaming"
              path="/gaming"
            />
            <LargeSidebarItem
              IconOrImgUrl={Newspaper}
              title="News"
              path="/news"
            />
            <LargeSidebarItem
              IconOrImgUrl={Trophy}
              title="Sports"
              path="/sports"
            />
            <LargeSidebarItem
              IconOrImgUrl={Lightbulb}
              title="Learning"
              path="/learning"
            />
            <LargeSidebarItem
              IconOrImgUrl={Shirt}
              title="Fashion & Beauty"
              path="/fashion-beauty"
            />
            <LargeSidebarItem
              IconOrImgUrl={Podcast}
              title="Podcasts"
              path="/podcasts"
            />
          </LargeSidebarSection>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
