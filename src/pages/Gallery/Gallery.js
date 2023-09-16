import React, { useEffect, useState } from "react";
import { getgallery } from "../../utils/api/board";

import { Link, useParams } from "react-router-dom";
import { changeGallery, deleteGallery } from "../../utils/api/gallery";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import styled from "styled-components";

const Gallery = () => {
  const { boardID } = useParams();

  const [changeGallData, setChangeGalldata] = useState({
    galleryName: "",
  });

  const [galleryList, setGalleryList] = useState([]);

  function removeHTMLTags(input) {
    return input.replace(/<[^>]*>/g, "");
  }

  function fetchGallery() {
    const response = getgallery(boardID);
    response
      .then(function (data) {
        setGalleryList(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleGalldelete = async () => {
    try {
      const deletedGall = await deleteGallery(boardID);
      console.log("갤러리 삭제 완료:", deletedGall);
    } catch (error) {
      console.log("갤러리 삭제 실패:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChangeGalldata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(changeGallData);
  };

  const handleGallChange = async () => {
    try {
      const changedGall = await changeGallery(boardID, changeGallData);
      console.log("갤러리 수정 완료:", changedGall);
    } catch (error) {
      console.log("갤러리 수정 실패:", error.message);
    }
  };

  useEffect(() => {
    fetchGallery();
    console.log(boardID);
  }, [boardID]);

  return (
    <div>
      <Header />

      <div style={{ margin: "auto 200px" }}>
        <div style={{ height: "120px"}}></div>

        <GalleryGrid>
          {galleryList &&
            galleryList.map((item) => (
              <Link
                to={`/gallery/${boardID}/${item.tableID}`}
                key={item.tableID}
              >
                <Post
                  coverImg={""}
                  title={item.title}
                  views={item.views}
                  userName={item.userNickname}
                  description={removeHTMLTags(item.description)}
                />
              </Link>
            ))}
        </GalleryGrid>

        <div>
          삭제할거~
          <input
            type="text"
            name="galleryName"
            value={changeGallData.galleryName}
            onChange={handleInputChange}
            placeholder="수정할 갤러리 이름"
          />

          <ButtonContainer>
            <Button onClick={handleGallChange}>갤러리 수정 버튼</Button>
            <Button onClick={handleGalldelete}>갤러리 삭제 버튼</Button>
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 0 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

