import customAxios from "../axios/axios";

// 로그인
export const Login = async (data) => {
  try {
    console.log(data, "dd");
    const response = await customAxios.post("/login", data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("아니 이게 뭐노..");
  }
};
