import React from "react";

import Routes from "./configs/routes";
import UserProvider from "./providers/UserProvider";

const App = () => (
  <UserProvider>
    <Routes />
  </UserProvider>
);

export default App;
