import {
  CalendarIcon,
  FlagIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { instance } from "../api/axios";

const TourCard = ({
  summary,
  difficulty,
  imageCover,
  price,
  name,
  duration,
  startLocation,
  maxGroupSize,
  ratingsAverage,
  ratingsQuantity,
  slug,
  id,
  startDates,
}) => {
  console.log(id);

  return (
    <Card className="mt-6 w-96 shadow-lg rounded-none justify-between">
      <CardHeader className="relative m-0 rounded-none w-full shadow-none">
        <img
          src={`http://localhost:3000/img/tours/${imageCover}`}
          alt={name}
          className="w-full object-cover"
        />
        <div className="w-full h-80 bg-green-300 opacity-80 absolute z-10 top-0 right-0"></div>
        <div className="w-full h-80 bg-white absolute z-10 left-0 -bottom-72 -skew-y-6"></div>

        <Typography
          variant="h2"
          className="absolute text-white z-20 top-36 px-2 py-1 right-6 w-60 font-bold bg-gradient-to-b from-green-300  to-green-500"
        >
          {name}
        </Typography>
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-2 text-gray-600 text-xs uppercase"
        >
          {difficulty} {duration}-day-tour
        </Typography>
        <Typography variant="small" className="">
          {summary}
        </Typography>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <MapPinIcon className="size-6 text-green-400" />
            <Typography
              variant="small"
              className="ml-1 font-normal text-gray-500"
            >
              {startLocation.description ? startLocation.description : "N/A"}
            </Typography>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="size-6 text-green-400" />
            <Typography
              variant="small"
              className="ml-1 font-normal text-gray-500"
            >
              {startDates[0].toLocaleString("en-us", {
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </div>
          <div className="flex items-center">
            <FlagIcon className="size-6 text-green-400" />
            <Typography
              variant="small"
              className="ml-1 font-normal text-gray-500"
            >
              4 stops
            </Typography>
          </div>
          <div className="flex items-center">
            <UserIcon className="size-6 text-green-400" />
            <Typography
              variant="small"
              className="ml-1 font-normal text-gray-500"
            >
              {maxGroupSize} people
            </Typography>
          </div>
        </div>
      </CardBody>
      <CardFooter className="bg-[#f7f7f7] rounded-none flex items-center justify-between">
        <div className="">
          <Typography variant="paragraph">
            <span className="font-bold">${price}</span> per person
          </Typography>
          <Typography variant="paragraph">
            <span className="font-bold">{ratingsAverage}</span> rating (
            {ratingsQuantity})
          </Typography>
        </div>
        <Link to={`/tours/${slug}/${id}`}>
          <Button
            size="lg"
            className="rounded-full bg-green-400 font-thin text-white border-none"
          >
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
