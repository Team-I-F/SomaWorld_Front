import React, { useState } from "react";
import * as S from "./style";
import arrowDown from "../../assets/arrow-down.png";
import { Link } from "react-router-dom";
import { useSignupMutation } from "../../services/auth/mutation";

const SignupPage = () => {
  const [signupUserData, setSignupUserData] = useState({
    name: "",
    nickname: "",
    id: "",
    pw: "",
  })

  const signupMutate = useSignupMutation(signupUserData);

  const handleSignupUserData = (e) => {
    const { name, value } = e.target;
    setSignupUserData({ ...signupUserData, [name]: value });
    console.log(signupUserData);
  };


  return (
    <S.Container>
      <S.SignupForm>
        <Link to={"/"} onClick={(e) => e.stopPropagation()}>
          <S.BackIcon
            style={{ transform: "rotate(90)" }}
            src={arrowDown}
            alt="아으"
          />
        </Link>

        <S.Frame>
          <S.Title>회원가입</S.Title>

          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "18px" }}>이미 계정이 있으신가요?</p>
            <Link
              to={`/login`}
              style={{ color: "#0047FF", marginLeft: "10px" }}
            >
              <p style={{ fontSize: "18px" }}>로그인</p>
            </Link>
          </div>

          <S.SignUpContainer>
            <S.FormField>
              <S.Label>이름</S.Label>
              <S.Input
                name="name"
                placeholder="이름"
                type="text"
                onChange={handleSignupUserData}
              />
            </S.FormField>
            <S.FormField>
              <S.Label>닉네임</S.Label>
              <S.Input
                name="nickname"
                placeholder="닉네임"
                type="text"
                onChange={handleSignupUserData}
              />
            </S.FormField>

            <S.FormField>
              <S.Label>아이디</S.Label>
              <S.InputWrapper>
                <input
                style={{
                  fontSize: '18px',
                  border: 'none',
                  padding: '0px 40px',
                  borderRadius: '35px'
                }}
                  name="id"
                  placeholder="아이디"
                  type="text"
                  onChange={handleSignupUserData}
                />
                  <S.InputButton>중복확인</S.InputButton>
                </S.InputWrapper>
            </S.FormField>

            <S.FormField>
              <S.Label>비밀번호</S.Label>
              <S.Input
                name="pw"
                placeholder="비밀번호"
                type="password"
                onChange={handleSignupUserData}
              />
            </S.FormField>

            <S.ButtonContainer>
              
              <S.Button type="button" onClick={()=> signupMutate.mutate()}>
                회원가입
              </S.Button>

            </S.ButtonContainer>
          </S.SignUpContainer>
        </S.Frame>
      </S.SignupForm>
    </S.Container>
  );
};

export default SignupPage;
