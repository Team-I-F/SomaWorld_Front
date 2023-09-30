// CustomQuill.js
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost, uploadImage } from "../../utils/api/board";
import { useParams } from 'react-router-dom';

const CustomQuill = () => {
const boardId = useParams();
  const quillRef = useRef(null);
  const [quill, setQuill] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (quillRef.current && !quill) {
      setQuill(quillRef.current.getEditor());
    }
  }, [quill]);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const imageHandler = () => {
    if (quill) {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();
      input.onchange = async () => {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("image", file);

        const range = quill.getSelection(true);
        quill.insertEmbed(
          range.index,
          "image",
          `${window.location.origin}/images/loaders/placeholder.gif`
        );
        quill.setSelection(range.index + 1);

        const imageUrl = await uploadImage(1, formData);
        console.log(imageUrl);
        quill.deleteText(range.index, 1);
        quill.insertEmbed(range.index, "image", imageUrl);
      };
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleWrite = async () => {
    try {
      const data = {
        galleryId: boardId,
        ...formData,
      };
      console.log(formData)
      const createdPost = await createPost(data);
      console.log(createdPost);

      console.log("글 등록 데이터:", data);
    } catch (error) {
      console.error("글 등록 실패:", error.message);
    }
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

      <ReactQuill
        ref={quillRef}
        value={formData.description}
        onChange={(value) =>
          setFormData((prevData) => ({
            ...prevData,
            description: value,
          }))
        }
        modules={modules}
        formats={formats}
      />
      <button onClick={imageHandler}>이미지 삽입</button>
      <button onClick={handleWrite}>글 등록</button>
    </div>
  );
};

export default CustomQuill;
