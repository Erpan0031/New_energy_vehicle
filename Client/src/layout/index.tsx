import Navigation from "@/components/Navigation";
import * as React from "react";
import { Outlet } from "react-router-dom";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="w-full">
        <Outlet />
    </div>
  );
};

export default Layout;
