import styles from './App.module.css';
import { Route, Routes } from '@solidjs/router';
import { Create } from '@routes/Create';
import { Join } from '@routes/Join';
import { Home } from '@routes/Home';
import { Game } from '@routes/Game';
import { LobbyProvider } from '@contexts/LobbyContext';

export function App() {
  return (
    <div class={styles.App}>
      <LobbyProvider>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/join/:id" component={Join} />
          <Route path="/game/:id" component={Game} />
        </Routes>
      </LobbyProvider>
    </div>
  );
}
