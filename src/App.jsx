import { createBrowserRouter } from "react-router";
import "./App.css";
import Signup from "./components/Signup";
import { RouterProvider } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/todo", element: <Todo /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
