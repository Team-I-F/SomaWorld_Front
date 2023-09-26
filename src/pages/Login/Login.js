import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.png";
import { useLoginMutation } from "../../services/auth/mutation";
import { loginCheck } from "../../services/auth/api";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../utils/recoil/recoil";

const Login = () => {
  const [loginUserData, setLoginUserData] = useState({
    id: "",
    pw: "",
  });

  const navigate = useNavigate();
  const loginMutate = useLoginMutation(loginUserData);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);


  const handleLoginUserData = (e) => {
    const { name, value } = e.target;
    setLoginUserData({ ...loginUserData, [name]: value });
  };

  useEffect(() => {
    // checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await loginCheck();
      setIsLoggedIn(response);
      console.log(isLoggedIn)
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {
    loginMutate.mutate();
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <S.Container>
      <S.LoginForm>
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
                name="id"
                placeholder="아이디"
                onChange={handleLoginUserData}
              />
            </S.FormField>
            <S.FormField>
              <S.Label>비밀번호</S.Label>
              <S.Input
                type="password"
                name="pw"
                placeholder="비밀번호"
                onChange={handleLoginUserData}
              />
            </S.FormField>
            <div>
              <Link to="/" style={{ color: "#0047FF" }}>
                <p style={{ fontSize: "18px", marginTop: "30px" }}>
                  아이디/ 비밀번호를 잊으셨나요?
                </p>
              </Link>
            </div>

            <S.ButtonContainer>
              <S.Button
                type="button"
                onClick={handleLogin}
              >
                로그인
              </S.Button>
            </S.ButtonContainer>
          </S.LoginContainer>
        </S.Frame>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
