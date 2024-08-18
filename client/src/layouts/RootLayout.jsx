import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Foot from "../components/Foot";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <div className="bg-[#f7f7f7]">
        <Outlet />
        <Foot />
      </div>
    </>
  );
};

export default RootLayout;
