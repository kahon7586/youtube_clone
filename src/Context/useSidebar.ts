import { createContext, useContext } from "react";

export interface SidebarContextValue {
  isSmallOpen: boolean;
  isLargeOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const contextValue = useContext(SidebarContext);
  if (contextValue === null) {
    throw Error("SidebarContextValue can't be used outside of provider.");
  }

  return contextValue;
}
