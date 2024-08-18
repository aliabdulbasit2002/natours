import { Typography } from "@material-tailwind/react";

function Foot() {
  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img
          src="https://www.natours.dev/img/logo-green.png"
          alt="logo-ct"
          className="w-48"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="green-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="green-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; {new Date().getFullYear()} Natours
      </Typography>
    </footer>
  );
}

export default Foot;
