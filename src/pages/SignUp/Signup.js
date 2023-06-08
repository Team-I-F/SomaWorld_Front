import React, { useState } from "react";
import customAxios from "../../utils/axios/axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await customAxios.post("/register", {
        id: userId,
        pw: password,
        name: name,
        nickname: nickname,
      });
      if (response.status === 200) {
        console.log("회원가입이 완료되었습니다.");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError("회원가입에 실패하였습니다.");
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form>
        <label>
          아이디:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          이름:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          닉네임:
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          회원가입
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignupPage;
