import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://panorbit.in/api/users.json"
      );
      const json = await data.json();
      setUsers(json.users);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        users
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
