import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { QuizProvider } from "./context/QuizContext";
const Home = lazy(() => import("./pages/Home"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Result = lazy(() => import("./pages/Result"));
const LeaderBoard = lazy(() => import("./pages/LeaderBoard"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<p>Loading..</p>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/quiz",
      element: (
        <Suspense fallback={<p>Loading..</p>}>
          <Quiz />
        </Suspense>
      ),
    },
    {
      path: "/result",
      element: (
        <Suspense fallback={<p>Loading..</p>}>
          <Result />
        </Suspense>
      ),
    },
    {
      path: "/board",
      element: (
        <Suspense fallback={<p>Loading..</p>}>
          <LeaderBoard />
        </Suspense>
      ),
    },
  ]);
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  );
}

export default App;
