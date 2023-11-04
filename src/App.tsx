import {
  A,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useRouteData,
} from '@solidjs/router';
import { Create } from '@routes/Create';
import { Join } from '@routes/Join';
import { Home } from '@routes/Home';
import { Game } from '@routes/Game';
import { Login } from '@routes/Auth/Login';
import { Logout } from '@routes/Auth/Logout';
import { Play } from '@routes/Play';
import { Layout } from '@components/Layout';
import { Show, createResource, onMount } from 'solid-js';
import { AuthProvider, useAuth } from '@contexts/AuthContext';
import { Profile } from '@routes/Profile';
import { useRequest } from '@hooks/useRequest';

const RouteGuard = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  onMount(() => {
    if (!auth.user) {
      navigate('/login', { replace: true });
    }
  });

  return (
    <Show when={auth.user}>
      <Outlet />
    </Show>
  );
};

const getUser = async () => {
  const { get } = useRequest();

  get('/auth/profile');

  return null;
};

function UserData({ params, location, navigate, data }) {
  const [user] = createResource(getUser);

  return user;
}

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" component={Layout}>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="" component={RouteGuard}>
            <Route path="/play" component={Play} />
            <Route path="/create" component={Create} />
            <Route path="/join/:id" component={Join} />
            <Route path="/profile" component={Profile} data={UserData} />
          </Route>
          <Route path="/game/:id" component={Game} />
        </Route>
        <Route path="*" element={() => <div>Page not found</div>} />
      </Routes>
    </AuthProvider>
  );
}
