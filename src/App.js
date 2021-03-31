import { useEffect } from "react";

import { Header } from "./components/Header";
import { useStore } from "./hooks/useStore";

function App() {
  const { users, setUsers } = useStore();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [setUsers]);

  return (
    <>
      <Header />
      {!!users.length && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
