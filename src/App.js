import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes";

import UserContext from "contexts/user";
import useAuthListener from "hooks/use_auth_listener";

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
