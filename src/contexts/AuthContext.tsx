import { createContext, useContext } from 'solid-js';

type User = {
  name: string;
};

type Permission = {
  type: string;
};

type AuthContext = {
  user: User;
  permissions?: Permission[];
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

export function AuthProvider(props: any) {
  const value = {
    user: null,
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
