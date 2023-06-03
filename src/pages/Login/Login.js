import React, { useState } from "react";
import customAxios from "../../utils/axios/axios";
import * as S from "./style";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.png";

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
    <S.Container>
      <S.LoginForm onSubmit={handleLogin}>
        <S.LoginIcon
          style={{ transform: "rotate(90)" }}
          src={arrowDown}
          alt="아으"
        />

        <S.Frame>
          <S.Title>로그인</S.Title>
          <S.LoginContainer>
            <S.FormField>
              <S.Label>아이디</S.Label>
              <S.Input
                type="text"
                id="id"
                value={id}
                placeholder="아이디"
                onChange={(e) => setId(e.target.value)}
              />
            </S.FormField>
            <S.FormField>
              <S.Label>비밀번호</S.Label>
              <S.Input
                type="password"
                id="password"
                value={password}
                placeholder="비밀번호"
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.FormField>
            <div>
              <Link to={`/`} style={{ color: "#0047FF" }}>
                <p style={{ fontSize: "18px", marginTop: "30px" }}>
                  아이디/ 비밀번호를 잊으셨나요?
                </p>
              </Link>
            </div>

            <S.ButtonContainer>
              <S.Button type="submit">로그인</S.Button>
            </S.ButtonContainer>
          </S.LoginContainer>
        </S.Frame>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
