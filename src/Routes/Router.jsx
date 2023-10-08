import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CardDetails from "../components/CardDetails/CardDetails";
import Registration from "../pages/Registration/Registration";
import About from "../components/About/About";
import ClassSchedule from "../pages/ClassSchedule/ClassSchedule";
import BlogPost from "../pages/BlogPost/BlogPost";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/gymData.json"),
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/classSchedule",
        element: (
          <PrivateRoute>
            <ClassSchedule></ClassSchedule>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <BlogPost></BlogPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
