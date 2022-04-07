import { lazy } from "react";

// project imports
import MainLayout from "views/layout/MainLayout";

// main menu routing
// const Content = lazy(() => import('views/pages/main/content/'));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    // {
    //   path: '/content',
    //   element: <Content />,
    // },
  ],
};

export default MainRoutes;
