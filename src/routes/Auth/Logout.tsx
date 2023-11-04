import { useAuth } from '@contexts/AuthContext';
import { createEffect } from 'solid-js';

export function Logout() {
  const { logout } = useAuth();

  createEffect(() => {
    logout();
  });

  return <h1>logout</h1>;
}
