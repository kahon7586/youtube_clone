import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "../CVA/buttonStyles";

interface LargeSidebarItemProps {
  IconOrImgUrl: LucideIcon | string;
  title: string;
  path: string;
  isActive?: boolean;
}

const LargeSidebarItem = ({
  IconOrImgUrl,
  title,
  path,
  isActive = false,
}: LargeSidebarItemProps) => {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `flex w-full items-center gap-4 rounded-lg p-3 ${isActive ? "bg-neutral-100 font-bold hover:bg-secondary" : null}`,
      )}
      href={path}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img className="h-6 w-6 rounded-full" src={IconOrImgUrl} />
      ) : (
        <IconOrImgUrl className="h-6 w-6" />
      )}
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </div>
    </a>
  );
};

export default LargeSidebarItem;
