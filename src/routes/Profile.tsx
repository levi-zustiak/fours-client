import { useRouteData } from '@solidjs/router';
import { createEffect } from 'solid-js';

export function Profile() {
  const user = useRouteData();

  createEffect(() => console.log(user()));

  return <h1>Profile</h1>;
}
