import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import * as S from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';
import customAxios from "../../utils/axios/axios";


const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // [{ 'font': [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
        { background: [] },
      ],
      ["image", "video"],
      [{ image: true }],
      ["clean"],
    ],
  },
};

const Write = () => {
  const { boardID } = useParams();
  const quillRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleWrite = async () => {
    try {
      // Post creation
      const dataPostCreation = new FormData();
      dataPostCreation.append("galleryId", boardID);
      console.log(formData)
      dataPostCreation.append("title", formData.title);
      dataPostCreation.append("description", formData.description);

      console.log(dataPostCreation)
      const postResponse = await customAxios.post('/board', dataPostCreation);
      
      if (postResponse.data.success) {
        console.log('게시글이 성공적으로 생성되었습니다.');
        console.log(postResponse.data.tableId); 

        // navigate(`/${boardID}`);
                
        let quillContentHTMLString= quillRef.current.getEditor().root.innerHTML;
        
        let parser= new DOMParser();
        let doc= parser.parseFromString(quillContentHTMLString,"text/html");
    
        let imgs= doc.querySelectorAll("img");
      
        for(let i=0;i<imgs.length;i++){
          let img = imgs[i];
          
          const dataImageUpload = new FormData();
          dataImageUpload.append('image', img.src);
          
          const imageResponse = await customAxios.put(`/board/image/${postResponse.data.tableId}`, dataImageUpload);
          
          if (imageResponse.data.success) {
            console.log('이미지가 성공적으로 업로드되었습니다.');
          
            img.src = imageResponse.data.imageUrl;
          } else {
            console.log('이미지 업로드 실패');
            return;
          }
        }
        
        // 모든 이미지가 업로드되고 URL이 변경된 후에는 다시 에디터의 내용을 변경해야 합니다.
        quillRef.current.getEditor().root.innerHTML = doc.body.innerHTML;
      } else {
        console.log('게시글 생성 실패');
      }
    } catch (error) {
      console.log("게시물 작성 실패:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          {/* <S.Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="제목"
            />
            <S.Input
              type="text"
              name="userNickname"
              value={formData.userNickname}
              onChange={handleInputChange}
              placeholder="작성자"
            /> */}
          {/* <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="본문"
            ></Textarea> */}

            <StyledReactQuill
              name="description"
              value={formData.description}
              onChange={(value) =>
                handleInputChange({ target: { name: "description", value } })
              }
              modules={modules}
            />

              <S.Button onClick={handleWrite}>작성</S.Button>
            
          </div>
        
      </S.PostBox>
    </div>
  );
};

export default Write;



const StyledReactQuill = styled(ReactQuill)`
  
  position: relative;

  .quill{
    background-color: aliceblue;
    position: relative;
  }

  .ql-toolbar {
    height: 100px;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ql-formats {
    /* button {
      font-size: 20px; 
    } */
  }

  .ql-container{
    position: fixed;
    margin-top: 100px;
    width: 60%;
    overflow-y: auto;
    margin-left: 20%;
    border: none;
  }

  .ql-editor{
  }

`;
