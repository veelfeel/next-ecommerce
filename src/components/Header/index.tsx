"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header() {
  const windowWidth = useWindowWidth();

  return (
    <header className="header">
      {windowWidth <= 991 ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
}
