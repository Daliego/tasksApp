import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "../../styles/loginPage/style.css";
import { useContext, useEffect, useReducer, useRef } from "react";
import { AuthActionType, authStateReducer } from "../../reducers/auth_reducer";

export function LoginPage() {
  const { isAuthenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authStateReducer, {
    logedIn: isAuthenticated,
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/task");
    }
  }, [isAuthenticated]);

  // if (isAuthenticated) {
  //   navigate("/task");
  // }

  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    if (!name.current?.value === null || !password.current?.value) {
      alert("Please enter user and password");
      return;
    }

    if(name.current?.value === "daliego" && password.current?.value === "1234"){
      login({username: name.current!.value});
      return;
    }
    // authDispatch({
    //   type: AuthActionType.Login,
    //   payload: {
    //     user: { name: name.current!.value, password: password.current!.value },
    //   },
    // });

    console.log("authState: " +authState.logedIn);

    // if (isAuthenticated) {
    //   navigate("/task");
    // }
  };

  return (
    <main className="loginPage">
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="User" ref={name} required />
        <input type="password" placeholder="password" ref={password} required />
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </main>
  );
}
