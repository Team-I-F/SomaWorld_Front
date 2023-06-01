import React, { useState } from "react";
import { createPost } from "../../utils/api/board";
import { useParams } from "react-router-dom";

const PostForm = () => {
  const { boardID } = useParams();

  const [title, setTitle] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        tableInfoId: boardID,
        title,
        userNickname,
        description,
      };
      const createdPost = await createPost(data);
      console.log("게시물 작성 완료:", createdPost);
    } catch (error) {
      console.log("게시물 작성 실패:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <input
        type="text"
        value={userNickname}
        onChange={(e) => setUserNickname(e.target.value)}
        placeholder="작성자"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="본문"
      ></textarea>
      <button type="submit">작성</button>
    </form>
  );
};

export default PostForm;
