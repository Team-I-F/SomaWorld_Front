import customAxios from "../../utils/axios/axios";

export const loginUser = async (loginUserData) => {
  try {
    const response = await customAxios.post("/user/login", loginUserData);

    if (response.status === 200) {
      sessionStorage.setItem("loginData", JSON.stringify(response.data));
    }
    return response;
  } catch (error) {
    throw error; 
  }
};

export const signupUser = async (signupUserData) => {
  const data = customAxios.post("/register", signupUserData);
  return data;
};

export const loginCheck = async () => {
  try {
    const response = await customAxios.get("/user/logincheck");
    const { data } = response; 
    const loggedIn = data.loggedIn; 
    return loggedIn; 
  } catch (error) {
    console.log(error);
    throw new Error("로그인에 실패했습니다.");
  }
};



export const logoutUser = async () => {
  try {
    await customAxios.get("/user/logout");  
    alert("로그아웃 성공");
    
  } catch (error) {
    console.log(error);
    throw new Error("로그인에 실패했습니다.");
  }
};
