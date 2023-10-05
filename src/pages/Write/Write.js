import React, { useState } from "react";
import { createPost } from "../../utils/api/board";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';
import * as S from "./style"
import ImageUploadModal from './ImageUploadModal';
import customAxios from "../../utils/axios/axios";


const Write = () => {
  const { boardID } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableId, setTableId] = useState(0);

  const handleWrite = async () => {
    try {
      const data = {
        galleryId: boardID,
        ...formData,
      };
      
      let res = await createPost(data);

      if (res.data != null) {
        setTableId(res.data.tableId);
        setIsModalOpen(true); 
      }
    } catch (error) {
      console.log("게시물 작성 실패: ㅋㅋ..", error.message);
    }
  };

  const handleFileChange = async (e) => {
    setSelectedImage(e.target.files[0]);
    console.log("파일 등록했냐")
       let formDataImg = new FormData();
       formDataImg.append('image', selectedImage);

       await customAxios.put(`/board/image/${tableId}`, formDataImg);
       
       setSelectedImage(null);
       setIsModalOpen(false);
     
   };

return (
<div style={{ position: "relative" }}>
<S.PostBox>
<S.Head>
<S.HeadTitle>SomaWorld</S.HeadTitle>
<S.Button onClick={handleWrite}>발행</S.Button>
<S.line></S.line>
</S.Head>

<div>
<input type="text" name="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="제목"/>
<ReactQuill value={formData.description} onChange={(value) => setFormData({ ...formData, description: value })}/>
<ImageUploadModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onFileChange={handleFileChange}/>

</div>

<button onClick={handleWrite}>Submit</button> 

</S.PostBox>
</div>
 );
};

export default Write;
