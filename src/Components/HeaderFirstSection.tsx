import { useSidebar } from "../Context/useSidebar";
import Button from "./Button";
import { Menu } from "lucide-react";
import YT_logo from "../Assets/YT_logo.png";

interface HeaderFirstSectionProps {
  hidden?: boolean;
}

const HeaderFirstSection = ({ hidden = false }: HeaderFirstSectionProps) => {
  const { toggle } = useSidebar();

  return (
    <div
      className={`${hidden ? "hidden md:flex" : "flex"} flex-shrink-0 items-center gap-4`}
    >
      <Button variant="ghost" size="icon" onClick={toggle}>
        <Menu />
      </Button>
      <a href="/">
        <img className="h-6" src={YT_logo} />
      </a>
    </div>
  );
};

export default HeaderFirstSection;
