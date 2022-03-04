import React, { useState } from "react";
import CustomRouter from "components/Router";
import { authService } from "fb";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <CustomRouter isLoggedIn={isLoggedIn} />;
}

export default App;
