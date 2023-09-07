import customAxios from "../axios/axios";

// 갤러리 생성
export const createGallery = async (data) => {
    try {
      console.log(data, "dd");
      const response = await customAxios.post("/board/gallery", data);
      return response.data;
 
    } catch (error) {
      console.log(error);
      throw new Error("갤러리 생성에 실패했습니다."); 
    }
  };
  

export const changeGallery = async (galleryId, data) => {
    return await customAxios.put(`/board/gallery/${galleryId}`, data);
};
  

export const deleteGallery = async (galleryId) => {
    return await customAxios.delete(`/board/gallery/${galleryId}`);
};
  