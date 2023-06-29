import React, { useState } from "react";
import { createPost } from "../../utils/api/board";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  width: 50%;
`;

const FormRight = styled.div`
  width: 50%;
`;

const Input = styled.input`
  margin: 10px 0;
`;

const Textarea = styled.textarea`
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

      // 아이 이동
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
        <FormLeft>
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
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="본문"
            ></Textarea>
            <Button onClick={handleWrite}>작성</Button>
          </div>
        </FormLeft>
        <FormRight>
          <p>미리보기</p>
          <p>제목: {formData.title}</p>
          <p>작성자: {formData.userNickname}</p>
          <p>본문: {formData.description}</p>
        </FormRight>
      </PostBox>
    </div>
  );
};

export default Write;
