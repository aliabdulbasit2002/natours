import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="min-h-[calc(100vh-76px-193.4px)] flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="light-green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Log In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              {...register("email", { required: true })}
              error={errors.email && errors.email}
            />
            <Input
              label="Password"
              size="lg"
              {...register("password", { required: true })}
              error={errors.password && errors.password}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              color="light-green"
              type="submit"
              fullWidth
            >
              Log In
            </Button>
            <Typography
              variant="small"
              className="mt-6 flex justify-center items-center"
            >
              Don&apos;t have an account?
              <Link to="/sign-up">
                <Typography variant="paragraph" className="ml-1 font-bold">
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default LogIn;
