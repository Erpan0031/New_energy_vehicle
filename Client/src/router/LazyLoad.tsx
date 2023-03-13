// 路由懒加载的封装
import Loading from "@/components/Loading";
import React from "react";

const LazyLoad = (path: string) => {  
  const Comp = React.lazy(() => import(/* @vite-ignore */ `../views${path}`));
  return (
    <React.Suspense fallback={<Loading/>}>
      <Comp></Comp>
    </React.Suspense>
  );
};

export default LazyLoad;
/* @vite-ignore */
