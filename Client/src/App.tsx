import { useState } from "react";
import RouteTable from "@/router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className=" dark:bg-gray-800">
      <ToastContainer position="top-center" />
      <RouteTable />
    </div>
  );
}
export default App;
