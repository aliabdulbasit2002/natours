import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import TourDetails from "./pages/TourDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="tours/:id" element={<TourDetails />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="log-in" element={<LogIn />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
