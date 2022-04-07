import { lazy } from "react";

// project imports
import AuthLayout from "views/layout/AuthLayout";

// login routing
const AuthLogin = lazy(() => import("views/pages/auth/Login"));

const AuthenticationRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <AuthLogin />,
    },
  ],
};

export default AuthenticationRoutes;
