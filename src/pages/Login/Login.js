import React, { useState } from "react";
import customAxios from "../../utils/axios/axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await customAxios.post("/user/login", {
        id,
        pw: password,
      });
      if (response.data.message === "success") {
        // 로그인 성공 시 처리
        console.log("로그인 성공");
      } else {
        // 로그인 실패 시 처리
        console.log("로그인 실패");
      }
    } catch (error) {
      console.log(error);
      // 에러 처리
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="id">ID: </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
