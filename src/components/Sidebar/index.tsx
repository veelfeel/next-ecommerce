"use client";

import React from "react";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";

export default function Sidebar() {
  return (
    <>
      <MobileSidebar />
      <DesktopSidebar />
    </>
  );
}
