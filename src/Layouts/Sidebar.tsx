import { Clapperboard, Home, Library, LucideIcon, Repeat } from "lucide-react";
import { buttonStyles } from "../CVA/buttonStyles";
import { twMerge } from "tailwind-merge";

interface ShortHandIconProps {
  Icon: LucideIcon;
  title: string;
  path: string;
}

const ShortHandIcon = ({ Icon, title, path }: ShortHandIconProps) => {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "flex flex-col items-center justify-center gap-1 rounded-lg px-1 py-4",
      )}
      href={path}
    >
      {/* note that buttonStyles return string of classes from variants, so we use twMerge to overwrite it with the classes we needed */}
      <Icon className="h-6 w-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};

const Sidebar = () => {
  return (
    <aside className="scrollbar-hidden sticky top-0 ml-1 flex flex-col overflow-y-auto pb-4 lg:hidden">
      <ShortHandIcon Icon={Home} title={"Home"} path={"/"} />
      <ShortHandIcon Icon={Repeat} title={"Shorts"} path={"/shorts"} />
      <ShortHandIcon
        Icon={Clapperboard}
        title={"Subscriptions"}
        path={"/subscriptions"}
      />
      <ShortHandIcon Icon={Library} title={"Library"} path={"/Library"} />
    </aside>
  );
};

export default Sidebar;
