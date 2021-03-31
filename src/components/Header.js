import { useStore } from "../hooks/useStore";

export function Header() {
  const { users } = useStore();

  return <header>Amount of users: {users.length}</header>;
}
