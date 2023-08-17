import customAxios from "../../utils/axios/axios";

export const loginUser = async (loginUserData) => {
  const data = customAxios.post("/user/login", loginUserData);
  return data;
};

export const signupUser = async (signupUserData) => {
  const data = customAxios.post("/register", signupUserData);
  return data;
};
