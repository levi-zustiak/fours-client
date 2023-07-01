import { useLobby } from '@contexts/LobbyContext';
import { useNavigate, useParams } from '@solidjs/router';
import { createEffect } from 'solid-js';

export function Join() {
  const params = useParams();
  const { join } = useLobby();

  createEffect(() => join(params.id));

  return <h1>Join</h1>;
}
