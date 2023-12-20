import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import Singers from "./components/Singers";
import Detail from "./components/Detail";
import React, { useCallback } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddForm />,
  },
  {
    path: "/singers",
    element: <Singers />,
  },
  {
    path: "/singers/:id",
    element: <Detail />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
