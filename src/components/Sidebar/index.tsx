"use client";

import React from "react";
import { createPortal } from "react-dom";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";

export default function Sidebar() {
  const windowWidth = useWindowWidth();

  return (
    <>
      {windowWidth !== undefined && windowWidth <= 991 ? (
        createPortal(<MobileSidebar />, document.body)
      ) : (
        <DesktopSidebar />
      )}
    </>
  );
}
