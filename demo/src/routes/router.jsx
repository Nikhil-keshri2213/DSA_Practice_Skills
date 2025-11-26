import { createBrowserRouter } from "react-router-dom";
import Docs from "../pages/Docs";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/docs",
    element: <Docs />
  }
]);
