import { createContext, useState } from "react";

export const Context = createContext([
  {
    name: "Carlos",
    username: "carlos",
  },
]);

export function ContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <Context.Provider value={{ users, setUsers }}>{children}</Context.Provider>
  );
}
