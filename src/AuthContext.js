import React, { useContext, useState } from "react";

const AuthContext =  React.createContext(undefined);

const AuthContextProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState({});
  const [loggedIn,setLoggedIn] = useState(false)

  const setUserInInfo = (user) => {
    setUserInformation(user);
  };

  return (
    <AuthContext.Provider
      value={{
        ...userInformation,
        loggedIn,
        setUserInInfo:setUserInInfo,
        setLoggedIn:setLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
