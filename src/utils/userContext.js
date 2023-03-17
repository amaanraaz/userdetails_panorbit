//creating a context to fetch data from given api

import React, { useContext, useState, useEffect, createContext } from "react";

//creating a context
const APIContext = createContext();

//creating the provider
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

// creating function that can be used to interact with context by provider comps
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
