import { useNavigate } from '@solidjs/router';
import { io, Socket } from 'socket.io-client';
import { createContext, JSX, ParentProps, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

type LobbyContext = {
  socket: Socket;
  create: () => void;
  join: (lobbyId: string) => void;
  state: LobbyState;
};

type User = {
  id: string;
  name: string;
};

type LobbyState = {
  id: string | null;
  host: User | null;
  peer: User | null;
};

const LobbyContext = createContext<LobbyContext>();

const LobbyProvider = (props: ParentProps): JSX.Element => {
  const navigate = useNavigate();
  const socket = io('localhost:3001/lobby');

  const [state, setState] = createStore<LobbyState>({
    id: null,
    host: null,
    peer: null,
  });

  const create = () => {
    socket.emit(
      'create',
      {
        user: {
          id: '1',
          name: 'Me',
        },
      },
      (res) => {
        setState(res);
      },
    );

    wait();
  };

  const join = (lobbyId: string) => {
    socket.emit('join', {
      id: lobbyId,
      user: {
        id: '2',
        name: 'Test',
      },
    });

    wait();
  };

  const wait = () => {
    socket.once('lobby:start', (res) => {
      if (res) {
        setState(res);

        navigate(`/game/${res.id}`, { state: res.game });
      }
    });
  };

  return (
    <LobbyContext.Provider value={{ socket, create, join, state }}>
      {props.children}
    </LobbyContext.Provider>
  );
};

const useLobby = () => {
  const context = useContext(LobbyContext);

  if (context === undefined) {
    throw new Error("LobbyContext was used outside of it's Provider");
  }

  return context;
};

export { LobbyContext, LobbyProvider, useLobby };
