import { A, Outlet, Route, Routes, useNavigate } from '@solidjs/router';
import { Create } from '@routes/Create';
import { Join } from '@routes/Join';
import { Home } from '@routes/Home';
import { Game } from '@routes/Game';
import { Login } from '@routes/Login';
import { Play } from '@routes/Play';
import { Layout } from '@components/Layout';
import { onMount } from 'solid-js';
import { AuthProvider, useAuth } from '@contexts/AuthContext';

const RouteGuard = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  onMount(() => {
    if (!auth.user) {
      navigate('/login', { replace: true });
    }
  });

  return <Outlet />;
};

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" component={Layout}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="" component={RouteGuard}>
            <Route path="/play" component={Play} />
            <Route path="/create" component={Create} />
            <Route path="/join/:id" component={Join} />
          </Route>
          <Route path="/game/:id" component={Game} />
        </Route>
        <Route path="*" element={() => <div>Page not found</div>} />
      </Routes>
    </AuthProvider>
  );
}
