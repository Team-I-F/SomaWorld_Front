import { useMutation } from "react-query";
import { loginUser, signupUser } from "./api";

export const useLoginMutation = (loginUserData) => {
  return useMutation(async () => {
    const response = await loginUser(loginUserData);
    if (response) {
      sessionStorage.setItem("loginData", JSON.stringify(response));
    }
    return response;
  }, {
    onSuccess: () => {
      alert("로그인 성공");
    },
    onError: () => {
      alert("로그인 실패");
    },
  });
};



export const useSignupMutation = (signupUserData) => {
  // console.log(signupUserData);
  return useMutation(() => signupUser(signupUserData), {
    onSuccess: () => {
      alert("회원가입 성공");
    },
    onError: () => {
      alert("회원가입 실패");
    },
  });
};
