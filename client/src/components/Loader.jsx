import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner color="green" className="h-12 w-12" />
    </div>
  );
};

export default Loader;
