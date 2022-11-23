import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./Router/Router/router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
