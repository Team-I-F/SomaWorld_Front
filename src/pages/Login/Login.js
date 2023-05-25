import { useState } from "react";
import axios from "axios";

const GOOGLE_CLIENT_ID =
  "884140746352-l95mrf3mucmi5bqn0n8a2ni0756s4q0k.apps.googleusercontent.com";
const GOOGLE_LOGIN_REDIRECT_URI = "http://localhost:3000/login/redirect";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo";

export default function Login() {
  const [error, setError] = useState(null);
  async function handleLogin() {
    try {
      const { data } = await axios.get("/googleLogin");
      window.location.href = data;
    } catch (error) {
      setError("Failed to login with Google");
    }
  }

  async function handleLoginRedirect() {
    try {
      const code = new URLSearchParams(window.location.search).get("code");
      const { data } = await axios.get(`/login/redirect?code=${code}`);
      console.log(data);
    } catch (error) {
      setError("Failed to login with Google");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <div>{error}</div>}
      <button onClick={handleLogin}>Login with Google</button>
      {new URLSearchParams(window.location.search).has("code") &&
        handleLoginRedirect()}
    </div>
  );
}
