import { LucideIcon } from "lucide-react";
import { buttonStyles } from "../CVA/buttonStyles";
import { twMerge } from "tailwind-merge";

interface SmallSidebarItemProps {
  IconOrImgUrl: LucideIcon;
  title: string;
  path: string;
}

const SmallSidebarItem = ({
  IconOrImgUrl,
  title,
  path,
}: SmallSidebarItemProps) => {
  return (
    <a
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "flex flex-col items-center justify-center gap-1 rounded-lg px-1 py-4",
      )}
      href={path}
    >
      {/* note that buttonStyles return string of classes from variants, so we use twMerge to overwrite it with the classes we needed */}
      <IconOrImgUrl className="h-6 w-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};

export default SmallSidebarItem;
