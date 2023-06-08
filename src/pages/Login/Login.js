import React, { useState } from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.png";
import { tryLogin } from "../../utils/api/user";

const Login = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = tryLogin({ id, pw: password });
    response
      .then(function (data) {
        console.log(response);
        navigate("/");
        console.log("로그인 성공");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Container>
      <S.LoginForm onSubmit={handleLogin}>
        <Link to={`/`}>
          <S.LoginIcon
            style={{ transform: "rotate(90)" }}
            src={arrowDown}
            alt="아으"
          />
        </Link>

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
