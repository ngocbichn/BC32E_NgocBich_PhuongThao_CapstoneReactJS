import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import HomeLayout from "../components/pages/userLayout/HomeLayout";
import BookingTicket from "../components/pages/userLayout/BookingTicket";
import DetailPage from "../components/pages/userLayout/DetailPage";

const Routers = () => {
  const Routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <HomeLayout />,
        },
        {
          path: "details",
          element: <DetailPage/>
        },
        {
          path: "bookingTicket",
          element: <BookingTicket />,
        },
      ],
    },
  ]);
  return Routing;
};

export default Routers;
