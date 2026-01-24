import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Applayout from "./layout/Applayout";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "//movie/:id",
          element: <MovieDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
