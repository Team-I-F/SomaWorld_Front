import React, { useState } from "react";
import { createPost } from "../../utils/api/board";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


// 웹 에디터
const modules = {
  toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
        ['image', 'video'],
        ['clean']  
      ],
  }
}


const PostBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

const Input = styled.input`
  margin: 10px 0;
`;

const Button = styled.button`
  margin: 10px 0;
`;

const Write = () => {
  const { boardID } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    userNickname: "",
    description: "",
  });

  const handleWrite = async () => {
    try {
      const data = {
        tableInfoId: boardID,
        ...formData,
      };
      const createdPost = await createPost(data);
      console.log("게시물 작성 완료:", createdPost);

      // navigate("/about");
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
    <div>
      <PostBox>
        <Left>
          <div>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="제목"
            />
            <Input
              type="text"
              name="userNickname"
              value={formData.userNickname}
              onChange={handleInputChange}
              placeholder="작성자"
            />
            {/* <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="본문"
            ></Textarea> */}

            <ReactQuill
              name="description"
              value={formData.description}
              onChange={(value) =>
                handleInputChange({ target: { name: "description", value } })
              }
              placeholder="본문"
              modules={modules}
            />

            <Button onClick={handleWrite}>작성</Button>
          </div>
        </Left>
        <Right>
          <p>제목: {formData.title}</p>
          <p>작성자: {formData.userNickname}</p>
          <p>본문: {formData.description}</p>
        </Right>
      </PostBox>
    </div>
  );
};

export default Write;
