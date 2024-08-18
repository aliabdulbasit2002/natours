import {
  ArrowTrendingUpIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import ReviewCard from "../components/ReviewCard";
import { Link, useParams } from "react-router-dom";
import { instance } from "../api/axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const TourDetails = () => {
  const [tourDetails, setTourDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await instance("tours/" + id);
        setTourDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <Loader />;

  console.log(tourDetails);

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-[520px] object-cover"
        />
        <div className="absolute z-20 top-0 left-0 w-full h-96 flex flex-col justify-center items-center">
          <Typography variant="h1" color="white">
            The Sea Explorer
          </Typography>

          <div className="flex items-center mt-10 gap-8">
            <div className="flex items-center gap-3">
              <ClockIcon className="size-6 text-white" />
              <Typography
                variant="h5"
                className="ml-1 font-normal"
                color="white"
              >
                7 days
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="size-6 text-white" />
              <Typography
                variant="h5"
                className="ml-1 font-normal"
                color="white"
              >
                Miami, USA
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-green-300 opacity-80 absolute z-10 top-0 right-0"></div>
        <div className="w-full bg-white h-64 absolute z-10 left-0 -bottom-40 -skew-y-6">
          <div className="w-1/2 h-full bg-[#f4f4f4]"></div>
          <div className="w-1/2 h-full"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2 ">
          <div className="px-40 py-20">
            <Typography variant="h3" color="light-green">
              Quick facts
            </Typography>

            <div className="mt-4 space-y-5">
              <div className="flex items-center gap-3">
                <CalendarIcon className="size-6 text-green-400" />
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="text-md flex items-center gap-4"
                >
                  <span className="font-bold">Next date</span>
                  June 2021
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <ArrowTrendingUpIcon className="size-6 text-green-400" />
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="text-md flex items-center gap-4"
                >
                  <span className="font-bold">Difficulty</span>
                  Medium
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <UserIcon className="size-6 text-green-400" />
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="text-md flex items-center gap-4"
                >
                  <span className="font-bold">Participants</span>
                  15 people
                </Typography>
              </div>
              <div className="flex items-center gap-3">
                <StarIcon className="size-6 text-green-400" />
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="text-md flex items-center gap-4"
                >
                  <span className="font-bold">Rating</span>
                  4.5 / 5
                </Typography>
              </div>
            </div>
          </div>
          <div className="px-40">
            <Typography variant="h3" color="light-green">
              Your tour guides
            </Typography>

            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                />
                <div className="flex items-center gap-5">
                  <Typography variant="h6">Tania Andrew</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Web Developer
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                />
                <div className="flex items-center gap-5">
                  <Typography variant="h6">Tania Andrew</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Web Developer
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white px-36 py-20">
          <Typography variant="h3" color="light-green" className="">
            About The Sea Explorer tour
          </Typography>

          <Typography variant="paragraph" color="gray" className="mt-4">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Typography>

          <Typography variant="paragraph" color="gray" className="mt-4">
            Irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </div>
      </div>
      <div className="-skew-y-6 flex mt-10 bg-white">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-80 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-80 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="min-h-[500px] -skew-y-6 bg-red-200">maps</div>
      <div className="min-h-[600px] flex justify-center items-center -skew-y-6 bg-green-200">
        <div className="skew-y-6 grid grid-flow-col gap-8 overflow-x-scroll snap-x p-10">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="py-20 my-20">
        <Card className="w-full h-60 max-w-4xl mx-auto shadow-2xl shadow-blue-gray-100">
          <CardBody className="flex items-center justify-between h-full overflow-hidden">
            <div className="flex items-center -space-x-20 -left-10 relative">
              <Avatar
                variant="circular"
                size="xxl"
                alt="user 3"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 4"
                size="xxl"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 5"
                size="xxl"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
              />
            </div>
            <div className="">
              <Typography variant="h4" color="light-green">
                What are you waiting for?
              </Typography>
              <Typography>
                7 days. 1 adventure. Infinite memories. Make it yours today!
              </Typography>
            </div>
            <Link to="/log-in">
              <Button
                variant="gradient"
                color="light-green"
                className="rounded-full hover:-translate-y-1 ease-in-out duration-200"
                size="lg"
              >
                Log In to Book
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TourDetails;
