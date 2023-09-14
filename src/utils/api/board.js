import { customAxios } from "../axios/axios";

/** 갤러리들 받아옴*/
export const getgalleryList = async () => {
  return await customAxios.get(`/board`);
};

/** 갤러리 받아옴 안엔 게시글들이!*/
export const getgallery = async (galleryId) => {
  return await customAxios.get(`/board/${galleryId}`);
};

/** 갤러리안의 글 받아옴*/
export const getTable = async (boardID, tableID) => {
  return await customAxios.get(`/board/${boardID}/${tableID}`);
};

// 게시물 작성
export const createPost = async (data) => {
  try {
    console.log(data, "dd");
    const response = await customAxios.post("/board", data);
    return response.data;

  } catch (error) {
    console.log(error);
    throw new Error("게시물 작성에 실패했습니다.");
  }
};
