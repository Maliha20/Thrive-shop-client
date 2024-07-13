import Footer from "@/pages/shared/Footer";
import Navbar from "@/pages/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-[100vh] flex flex-col">
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default MainLayout;