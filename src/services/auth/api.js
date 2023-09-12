import customAxios from "../../utils/axios/axios";

export const loginUser = async (loginUserData) => {
  const data = customAxios.post("/user/login", loginUserData);
  return data;
};

export const signupUser = async (signupUserData) => {
  const data = customAxios.post("/register", signupUserData);
  return data;
};

export const loginCheck = async () => {
  try {
    const response = await customAxios.get("/user/loginCheck");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("로그인에 실패했습니다.");
  }
};
