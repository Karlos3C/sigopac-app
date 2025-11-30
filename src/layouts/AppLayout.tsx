import { Outlet } from "react-router-dom";
import SidebarMenu from "../components/ui/SidebarMenu";
import Header from "../components/ui/Header";
import { useState } from "react";

export default function AppLayout() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="flex">
        <SidebarMenu visible={visible} setVisible={setVisible} />
        <div className="w-full lg:overflow-y-scroll lg:h-screen">
          <Header setVisible={setVisible} />
          <div className="p-10 w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
