import { useMutation } from "react-query";
import { loginUser, signupUser } from "./api";

export const useLoginMutation = (loginUserData) => {
  return useMutation(async () => {
    const response = await loginUser(loginUserData);    
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
