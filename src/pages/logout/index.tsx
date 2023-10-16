import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export function Logout() {
  console.log("executoru");
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      logout();
    }
    navigate("/");
  });

  return <main>You were logged out</main>;
}