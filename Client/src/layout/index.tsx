import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const Store = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  console.log(Store);

  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default Layout;
