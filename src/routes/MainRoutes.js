import { lazy } from "react";

// project imports
import MainLayout from "views/layout/MainLayout";

// main menu routing
const UserChannel = lazy(() => import("views/pages/main/UserChannel"));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/:username",
      element: <UserChannel />,
    },
  ],
};

export default MainRoutes;
