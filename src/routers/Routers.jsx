import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import HomeLayout from "../components/pages/userLayout/HomeLayout";
import BookingTicket from "../components/pages/userLayout/BookingTicket";
import DetailPage from "../components/pages/userLayout/DetailPage";
import DashBoard from "../components/pages/adminLayout/DashBoard/DashBoard";
import Films from "../components/pages/adminLayout/Films/Films";
import Showtimes from "../components/pages/adminLayout/Showtimes/Showtimes";
import AdminLayout from "../components/layouts/AdminLayout";

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
          path: "details/:movieId",
          element: <DetailPage />
        },
        {
          path: "bookingTicket",
          element: <BookingTicket />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <DashBoard />,
        },
        {
          path: "/admin/films",
          element: <Films />,
        },
        {
          path: "/admin/showtimes",
          element: <Showtimes />,
        },
      ]
    }
  ]);
  return Routing;
};

export default Routers;
