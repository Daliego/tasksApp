import { AuthManipulator } from "../context/authContext";
import { Admin, mainUser } from "../users/user";

export enum AuthActionType {
  Login,
  Logout,
}

export interface AuthState {
  logedIn: boolean;
}

type Login = { type: AuthActionType.Login; payload: { user: Admin } };
type Logout = { type: AuthActionType.Logout };

export type AuthAction = Login | Logout;

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionType.Login:
      const { login, isAuthenticated } = AuthManipulator();

      const { name, password } = action.payload.user;
      if (name === mainUser.name && password === mainUser.password) {
        // const user: User = {}
        login({ username: name });
        return { logedIn: true };
      }

      alert("Wrong username or password");
      return { logedIn: false };
    case AuthActionType.Logout:
      const { logout } = AuthManipulator();
      logout();
      return { logedIn: false };
  }
}

export { reducer as authStateReducer };
