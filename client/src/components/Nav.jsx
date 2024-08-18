import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="">
      <Link to="/log-in">
        <Button
          variant="text"
          className="text-md font-thin hover:bg-transparent text-white hover:-translate-y-1 ease-in-out duration-300"
        >
          Log In
        </Button>
      </Link>
      <Link to="/sign-up">
        <Button
          variant="outlined"
          className="text-md font-thin hover:bg-transparent text-white border-white rounded-full hover:bg-white hover:text-black hover:-translate-y-0.5 ease-in-out duration-300"
        >
          Sign Up
        </Button>
      </Link>
    </ul>
  );
}

function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-full px-6 py-3 border-none rounded-none bg-[#444] ">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-thin text-xl hover:-translate-y-1 ease-in-out duration-300"
        >
          <Link to="/">All Tours</Link>
        </Typography>
        <img
          src="https://www.natours.dev/img/logo-white.png"
          alt="logo"
          className="h-12"
        />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Nav;
