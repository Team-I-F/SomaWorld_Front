import React, { useState } from "react";
import { createPost } from "../../utils/api/board";
import { useParams, useNavigate } from "react-router-dom";

const PostForm = () => {
  const { boardID } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    userNickname: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="제목"
      />
      <input
        type="text"
        name="userNickname"
        value={formData.userNickname}
        onChange={handleInputChange}
        placeholder="작성자"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="본문"
      ></textarea>
      <button type="submit">작성</button>
    </form>
  );
};

export default PostForm;
