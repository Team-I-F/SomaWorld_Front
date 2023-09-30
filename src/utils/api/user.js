import { loginCheck } from "../../services/auth/api";
import { customAxios } from "../axios/axios";

// 로그인 되나 이거.. 400만 안떴음 좋겠다

export const tryLogin = async ({ id, pw }) => {
  try {
    console.log(id, pw, "dd");
    const response = await customAxios.post("/user/login", { id, pw });
    return response.data;
    // 성공적으로 작성된 게시물의 응답 데이터를 반환
  } catch (error) {
    console.log(error);
    throw new Error("로그인에 실패했습니다."); // 에러 처리
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
