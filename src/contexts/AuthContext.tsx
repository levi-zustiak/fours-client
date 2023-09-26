import axios from 'axios';
import {
  createContext,
  createEffect,
  createSignal,
  useContext,
} from 'solid-js';

const USER_KEY = 'fours_user';

type User = {
  id: string;
  name: string;
};

type Permission = {
  type: string;
};

type AuthContext = {
  user: User | null;
  login: (fields: { name: string; password: string }) => void;
  logout: () => void;
  permissions?: Permission[];
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

export function AuthProvider(props: any) {
  const [user, setUser] = createSignal<User | null>(getUser());

  async function login(fields: { name: string }) {
    try {
      const { data } = await axios.post(
        'http://localhost:3001/auth/login',
        fields,
      );

      setUser(data.user);

      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    localStorage.removeItem(USER_KEY);
  }

  function getUser(): User | null {
    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
  }

  const value = {
    user: user(),
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
