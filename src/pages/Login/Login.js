import React, { useState } from "react";
<<<<<<< HEAD
import * as S from "./style";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.png";
import { useLoginMutation } from "../../services/auth/mutation";

const Login = () => {
  const [loginUserData, setLoginUserData] = useState({
    id: "",
    pw: "",
  });

  const loginMutate = useLoginMutation(loginUserData);

  const handleLoginUserData = (e) => {
    const { name, value } = e.target;
    setLoginUserData({ ...loginUserData, [name]: value });
    console.log(loginUserData);
=======
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
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
  };

  return (
    <S.Container>
<<<<<<< HEAD
      <S.LoginForm>
=======
      <S.LoginForm onSubmit={handleLogin}>
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
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
<<<<<<< HEAD
                name="id"
                placeholder="아이디"
                onChange={handleLoginUserData}
=======
                id="id"
                value={id}
                placeholder="아이디"
                onChange={(e) => setId(e.target.value)}
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
              />
            </S.FormField>
            <S.FormField>
              <S.Label>비밀번호</S.Label>
              <S.Input
                type="password"
<<<<<<< HEAD
                name="pw"
                placeholder="비밀번호"
                onChange={handleLoginUserData}
              />
            </S.FormField>
            <div>
              <Link to="/" style={{ color: "#0047FF" }}>
=======
                id="password"
                value={password}
                placeholder="비밀번호"
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.FormField>
            <div>
              <Link to={`/`} style={{ color: "#0047FF" }}>
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
                <p style={{ fontSize: "18px", marginTop: "30px" }}>
                  아이디/ 비밀번호를 잊으셨나요?
                </p>
              </Link>
            </div>

            <S.ButtonContainer>
<<<<<<< HEAD
              <S.Button type="submit" onClick={() => loginMutate.mutate()}>
                로그인
              </S.Button>
=======
              <S.Button type="submit">로그인</S.Button>
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
            </S.ButtonContainer>
          </S.LoginContainer>
        </S.Frame>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
