import styles from './App.module.css';
import { Route, Routes } from '@solidjs/router';
import { Create } from '@routes/Create';
import { Join } from '@routes/Join';
import { Home } from '@routes/Home';

export function App() {
  return (
    <div class={styles.App}>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/join" component={Join} />
      </Routes>
    </div>
  );
}
