import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Search from "./pages/Search.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
