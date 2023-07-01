import { useLobby } from '@contexts/LobbyContext';
import { createEffect, Show } from 'solid-js';

export function Create() {
  const { state, create } = useLobby();

  createEffect(() => create());
  console.log(state);

  return (
    <div>
      <h1>Create</h1>
      <Show when={state.id} fallback={<h4>Loading</h4>}>
        <h4>Lobby id: {state.id}</h4>
      </Show>
      <button>Create</button>
    </div>
  );
}
