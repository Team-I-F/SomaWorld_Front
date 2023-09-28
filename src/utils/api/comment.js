import { customAxios } from "../axios/axios";

export const getgalleryList = async () => {
  return await customAxios.get(`/board`);
};

export const createPost = async (data) => {
  try {
    const response = await customAxios.post("/board", data);
    return response.data;  
  } catch (error) {
    console.log(error);
    throw new Error("게시물 작성에 실패했습니다.");
  }
};
