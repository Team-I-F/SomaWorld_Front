import React, { useState, useEffect } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/arrow-down.png";
import { useLoginMutation } from "../../services/auth/mutation";
import { loginCheckStatus } from "../../utils/api/user";
import { loginCheck } from "../../services/auth/api";

const Login = () => {
  const [loginUserData, setLoginUserData] = useState({
    id: "",
    pw: "",
  });

  const loginMutate = useLoginMutation(loginUserData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginUserData = (e) => {
    const { name, value } = e.target;
    setLoginUserData({ ...loginUserData, [name]: value });
    console.log(loginUserData);
  };

  useEffect(() => {
    // 페이지가 로드될 때 로그인 상태를 확인하도록 설정
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await loginCheck();
      // setIsLoggedIn(response);
    } catch (error) {
      console.error(error);
    }
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
                type="submit"
                onClick={() => {
                  loginMutate.mutate();
                }}
              >
                로그인
              </S.Button>
            </S.ButtonContainer>
          </S.LoginContainer>

          <div>
            {isLoggedIn ? (
              <p>로그인 됐냐?</p>
            ) : (
              <div
                onClick={()=>checkLoginStatus()}
                style={{ backgroundColor: "red", cursor: "pointer" }}
              >
                로그인 확인
              </div>
            )}
          </div>
        </S.Frame>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
