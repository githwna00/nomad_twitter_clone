import React, { useEffect, useState } from "react";
import CustomRouter from "components/Router";
import { authService } from "fb";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? (
        <CustomRouter
          isLoggedIn={Boolean(userObj)}
          refreshUser={refreshUser}
          userObj={userObj}
        />
      ) : (
        "Initializing"
      )}
    </>
  );
}

export default App;
