import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { fetchUsers, selectAllPosts } from "@/store/slice/user.slice";
interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default Layout;
