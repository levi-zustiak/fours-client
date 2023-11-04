import { createEffect, createSignal } from 'solid-js';

type User = {
  id: string;
  name: string;
};

const USER_KEY = 'fours_user';

export function useUser() {
  const [user, setUser] = createSignal(get());

  function get(): User | null {
    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
  }

  function removeUser() {
    localStorage.removeItem(USER_KEY);
  }

  createEffect(() => localStorage.setItem(USER_KEY, JSON.stringify(user())));

  createEffect(() => console.log(user()));

  return {
    user,
    setUser,
    removeUser,
  };
}
