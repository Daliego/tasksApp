import { createContext, useState, useContext } from "react";

export type User = {
  username: string;
};

export interface AuthContextParts {
  user: User | null;
  login(user: User): void;
  logout(): void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextParts>(
  {isAuthenticated: false} as AuthContextParts
);

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null);
  }

    const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated } as AuthContextParts}
    >
      {children}
    </AuthContext.Provider>
  );
}

  export function AuthManipulator(): AuthContextParts {
    const authContext = useContext(AuthContext);

    if (!authContext) {
      throw new Error("useAuth must be used within an AuthProvider");
    }

    return authContext;
}