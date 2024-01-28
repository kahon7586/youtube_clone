import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import YT_logo from "../Assets/YT_logo.png";
import Button from "../Components/Button";
import { useState } from "react";

const PageHeader = () => {
  const [md_showSearchBar, md_setShowSearchBar] = useState(false);

  return (
    <div className="mx-4 mb-6 flex justify-between gap-10 pt-2 lg:gap-20">
      <div
        className={`${md_showSearchBar ? "hidden" : "flex"} flex-shrink-0 items-center gap-4`}
      >
        <Button>
          <Menu />
        </Button>
        <a href="/">
          <img className="h-6" src={YT_logo} />
        </a>
      </div>
      <form
        className={`${md_showSearchBar ? "flex" : "hidden"} flex-grow justify-center gap-4 md:flex `}
      >
        <div className="flex max-w-[600px] flex-grow">
          <input
            className="w-full rounded-l-full border border-secondary-border px-4 py-1 text-lg shadow-inner shadow-secondary outline-none focus:border-blue-500"
            type="search"
            placeholder="Search"
          />
          <Button className="flex-shrink-0 rounded-r-full border border-l-0 border-secondary-border px-4 py-2">
            <Search />
          </Button>
        </div>
        <Button className="flex-shrink-0" size="icon" type="button">
          <Mic />
        </Button>
      </form>
      <div
        className={`${md_showSearchBar ? "hidden" : "flex"} flex-shrink-0 md:gap-2 `}
      >
        <Button
          className="md:hidden"
          size="icon"
          variant="ghost"
          onClick={() => md_setShowSearchBar(true)}
        >
          <Search />
        </Button>
        <Button className="md:hidden" size="icon" variant="ghost">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
