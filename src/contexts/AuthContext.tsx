import { useRequest } from '@hooks/useRequest';
import { useUser } from '@hooks/useUser';
import { useNavigate } from '@solidjs/router';
import axios from 'axios';
import { createContext, useContext } from 'solid-js';

type User = {
  id: string;
  name: string;
};

type Permission = {
  type: string;
};

type AuthContext = {
  user: User | null;
  register: () => void;
  login: (fields: { name: string; password: string }) => void;
  logout: () => void;
  permissions?: Permission[];
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

export function AuthProvider(props: any) {
  const { user, setUser, removeUser } = useUser();
  const navigate = useNavigate();
  const { post } = useRequest();

  function register() {}

  async function login(fields: { name: string }) {
    try {
      const { data } = await axios.post(
        'http://localhost:3001/auth/login',
        fields,
      );

      if (typeof data === 'object') {
        setUser(data.user);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    const res = post('/auth/logout');

    removeUser();

    navigate('/login', { replace: true });
  }

  const value = {
    user: user(),
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("AuthContext was used outside it's provider");
  }

  return context;
}
