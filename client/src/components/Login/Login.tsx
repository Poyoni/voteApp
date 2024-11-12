import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { loginUser } from "../../store/userSlice";
import "./Login.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const loginStatus = useSelector((state: RootState) => state.user.status);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
      {loginStatus === "loading" && <p>Logging in...</p>}
      {loginStatus === "failed" && <p>Login failed. Please check your credentials.</p>}
      {loginStatus === "succeeded" && <p>Login successful!</p>}
      <p className="switch-auth">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </form>
    
  );
};

export default Login;