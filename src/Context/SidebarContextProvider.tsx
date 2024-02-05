import { ReactNode, useEffect, useState } from "react";
import { SidebarContext, SidebarContextValue } from "./useSidebar";

interface SidebarContextProviderProps {
  children: ReactNode;
}

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);

  useEffect(() => {
    // we want to reset isSmallOpen to false when window grow to large scale then shrink back to small

    function handler() {
      if (!isScreenSmall()) {
        setIsSmallOpen(false);
      }
    }

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  function isScreenSmall() {
    return window.innerWidth < 1024;
    // 1024 is breakpoint value for lg in tailwind
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen((smallState) => !smallState);
    } else {
      setIsLargeOpen((largeState) => !largeState);
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }

  const contextValue: SidebarContextValue = {
    isLargeOpen,
    isSmallOpen,
    toggle,
    close,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
