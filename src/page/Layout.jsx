import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
       <Sidebar/>
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
          <Outlet/>
        </div>
    </div>
    </>
  )
}
