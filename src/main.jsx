import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./Component/Shared/Error/Error.jsx";
import Home from "./Component/Pages/Home/Home.jsx";
import BookingForm from "./Component/Pages/Tvshow/BookingForm.jsx";
import BookingHistory from "./Component/Pages/Tvshow/BookingHistory.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/booking-history",
        element: <BookingHistory></BookingHistory>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
