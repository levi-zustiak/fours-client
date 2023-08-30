import { A, Outlet, Route, Routes, useNavigate } from '@solidjs/router';
import { Create } from '@routes/Create';
import { Join } from '@routes/Join';
import { Home } from '@routes/Home';
import { Game } from '@routes/Game';
import { Login } from '@routes/Login';
import { Play } from '@routes/Play';
import { Layout } from '@components/Layout';
import { onMount } from 'solid-js';

const RouteGuard = (props) => {
  const navigate = useNavigate();

  onMount(() => {
    if (!props.authorized) {
      navigate('/login', { replace: true });
    }
  });

  return <Outlet />;
};

export function App() {
  return (
    <Routes>
      <Route path="" component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="" element={<RouteGuard authorized={false} />}>
          <Route path="/play" component={Play} />
          <Route path="/create" component={Create} />
          <Route path="/join/:id" component={Join} />
        </Route>
        <Route path="/game/:id" component={Game} />
      </Route>
      <Route path="*" element={() => <div>Page not found</div>} />
    </Routes>
  );
}
