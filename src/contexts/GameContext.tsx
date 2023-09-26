import { createContext, onCleanup, onMount, useContext } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { useLobby } from './LobbyContext';

type Token = {
  col: number;
  row: number;
  player: any;
};

type Column = Array<Token | null>;

type Board = Column[];

type GameState = {
  id: number;
  players: Record<string, any>;
  currentPlayer: string;
  gameOver: boolean;
  board: Board;
};

type Props = {
  initialState: GameState;
  children: any;
};

type GameContext = {
  state: GameState;
  update: (col: number) => void;
};

const GameContext = createContext<GameContext | undefined>(undefined);

const GameContextProvider = (props: Props) => {
  const lobby = useLobby();

  const [state, setState] = createStore<GameState>(props.initialState);

  const update = (col: number) => {
    try {
      lobby.socket.emit('update', {
        id: lobby.state.id,
        user: { id: '1', name: 'Me' },
        col,
      });
    } catch (e) {
      console.log(e);
    }
  };

  onMount(() => {
    lobby.socket.on('game:update', (newState) => setState(reconcile(newState)));

    onCleanup(() => lobby.socket.off('game:update'));
  });

  return (
    <GameContext.Provider value={{ state, update }}>
      {props.children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("GameContext was used outside of it's provider");
  }

  return context;
};

export { GameContext, GameContextProvider, useGame };
