import { Navigate, Route, useRoutes } from "react-router-dom";
import LazyLoad from "./LazyLoad";
import AuthComponent from "./AuthComponent";
import Layout from "@/layout/index";
const IndexRouter = () => {
  const routerElement = useRoutes([
    //  重定向操作
    {
      path: "/",
      element: <Layout />,
      children: [
        //  二级路由的重定向
        {
          path: "/",
          element: LazyLoad("/Home"),
        },
        {
          path: "home",
          element: LazyLoad("/Home"),
        },
        {
          path: "about",
          element: LazyLoad("/About"),
        },
        // 配置 无权限（404）
        {
          path: "*",
          element: LazyLoad("/404pages"),
        },
      ],
    },
    {
      path: "/login",
      element: LazyLoad("/Login"),
    },
  ]);

  return routerElement;
};

function IsAuth() {
  return localStorage.getItem("token") ? true : false;
}

export default IndexRouter;
