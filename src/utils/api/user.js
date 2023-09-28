import { loginCheck } from "../../services/auth/api";
import { customAxios } from "../axios/axios";

export const tryLogin = async ({ id, pw }) => {
  try {
    console.log(id, pw, "dd");
    const response = await customAxios.post("/user/login", { id, pw });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("로그인에 실패했습니다.");
  }
};

export const loginCheckStatus = async () => {
  try {
    const response = await loginCheck();
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("로그인 상태 확인에 실패했습니다.");
  }
};
