import { lazy } from "react";

import Loadable from "components/loadable";

import AuthLayout from "views/layout/AuthLayout";

const AuthLogin = Loadable(lazy(() => import("views/pages/auth/login")));
const AuthSignUp = Loadable(lazy(() => import("views/pages/auth/SignUp")));

const AuthenticationRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <AuthLogin />,
    },
    {
      path: "/signUp",
      element: <AuthSignUp />,
    },
  ],
};

export default AuthenticationRoutes;
