import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <ExpenseTracker /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
