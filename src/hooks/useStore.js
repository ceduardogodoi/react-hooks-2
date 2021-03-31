import { useContext } from "react";
import { Context } from "../store";

export function useStore() {
  const { users, setUsers } = useContext(Context);

  return { users, setUsers };
}
