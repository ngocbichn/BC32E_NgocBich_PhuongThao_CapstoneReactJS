import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import HomeLayout from "../components/pages/userLayout/HomeLayout";
import BookingTicket from "../components/pages/userLayout/BookingTicket";
import DetailPage from "../components/pages/userLayout/DetailPage";
import { Navigate } from "react-router-dom";
import LogInPage from "../components/pages/userLayout/LogInPage";

const Routers = () => {
  const Routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Navigate to='/home' />,
        },
        {
          path: "home",
          element: <HomeLayout />,
        },
        {
          path: "details/:movieId",
          element: <DetailPage />
        },
        {
          path: "ticketRoom/:maLichChieu",
          element: <BookingTicket />,
        },
      ],
    },
    {
      path: "login",
      element: <LogInPage />,
    },

  ]);
  return Routing;
};

export default Routers;
