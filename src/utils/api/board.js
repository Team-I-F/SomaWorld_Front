import { customAxios } from "../axios/axios";

export const getboardList = async () => {
  return await customAxios.get(`/board`);
};
