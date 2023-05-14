import { customAxios } from "../axios/axios";

/** 갤러리들 받아옴*/
export const getboardList = async () => {
  return await customAxios.get(`/boards`);
};

/** 갤러리 받아옴 안엔 게시글들이!*/
export const getboard = async (boardID) => {
  return await customAxios.get(`/board/${boardID}`);
};

/** 갤러리안의 글 받아옴*/
export const getTable = async (boardID, tableID) => {
  return await customAxios.get(`/board/${boardID}/${tableID}`).data;
};
