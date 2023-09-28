import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 
import customAxios from "../../utils/axios/axios";

const StyledReactQuill = styled(ReactQuill)``;

const Write = () => {
  const { boardID } = useParams();
  const quillRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleWrite = async () => {
    try {
      const dataPostCreation = new FormData();
      dataPostCreation.append("galleryId", boardID);
      dataPostCreation.append("title", formData.title);
      dataPostCreation.append("description", formData.description);

      console.log(dataPostCreation)
      const postResponse = await customAxios.post('/board', dataPostCreation);
      
      if (postResponse.data.success) {
        console.log('게시글이 성공적으로 생성되었습니다.');
        console.log(postResponse.data.tableId); // 이 값은 추후 이미지 업로드 시 사용됩니다.
        
        // navigate(`/${boardID}`);
        
        let quillContentHTMLString= quillRef.current.getEditor().root.innerHTML;
        
        let parser= new DOMParser();
        let doc= parser.parseFromString(quillContentHTMLString,"text/html");
      
      	let imgs= doc.querySelectorAll("img");
      
      	for(let i=0;i<imgs.length;i++){
          let img = imgs[i];
          
          // 파일 업로드
          const dataImageUpload = new FormData();
          dataImageUpload.append('image', img.src);
          
          const imageResponse = await customAxios.put(`/board/image/${postResponse.data.tableId}`, dataImageUpload);
          
          if (imageResponse.data.success) {
            console.log('이미지가 성공적으로 업로드되었습니다.');
            
            // 이미지 URL을 바꿉니다.
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

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        
        // 아래 코드는 툴바의 "image" 버튼이 클릭될 때 실행되는 함수입니다.
        ['image'],
      ],
      handlers: {
          image: () => {
              let fileInput = document.createElement('input');
              fileInput.setAttribute('type', 'file');
              fileInput.setAttribute('accept', 'image/*');
              fileInput.click();

              // 파일 선택 시 실행될 이벤트 리스너
              fileInput.onchange = async () => {
                  let file = fileInput.files[0];
                  let formData = new FormData();
                  formData.append('image', file);
                  const res = await customAxios.put(`/board/image/temp`, formData);
                  
                  if (res.data.success) {
                      console.log("이미지 업로드 성공");
                      let range = quillRef.current.getEditor().getSelection(true);
                      quillRef.current.getEditor().insertEmbed(range.index, "image", res.data.imageUrl);
                      
                      console.log(res.data.imageUrl); 
                      
                  } else {
                      console.error("이미지 업로드 실패");
                  }
                  
              };
          },
      },
    },
};

return (
    <div>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="제목"
      />
      
    	<StyledReactQuill
      	ref={quillRef}
      	name="description"
      	value={formData.description}
      	onChange={(value) =>
        	handleInputChange({ target: { name: "description", value } })
      	}
      	placeholder="본문"
      	modules={modules} 
    	/>
    	
    	<button onClick={handleWrite}>작성</button>
  	</div>
);

};

export default Write;
