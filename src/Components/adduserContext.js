import React, { createContext, useState } from 'react';

const AdduserContext = createContext();

const AdduserProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const addUser = (users) => {
    setUserData([...userData,users]);
  };

  return (
    <AdduserContext.Provider value={{ userData, addUser }}>
      {children}
    </AdduserContext.Provider>
  );
};

export { AdduserContext, AdduserProvider };
