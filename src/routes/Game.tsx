import { Board } from '@components/game/Board';
import { GameContextProvider } from '@contexts/GameContext';
import { useLocation } from '@solidjs/router';

export function Game() {
  const { state } = useLocation();

  return (
    <GameContextProvider initialState={state}>
    </GameContextProvider>
  );
}
