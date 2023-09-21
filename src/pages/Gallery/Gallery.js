import React, { useEffect, useState } from "react";
import { getgallery } from "../../utils/api/board";

import { Link, useParams } from "react-router-dom";
import { changeGallery, deleteGallery } from "../../utils/api/gallery";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import styled from "styled-components";
import { loginCheck } from "../../services/auth/api";

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

        {/* 이거 만든 인간이면? */}
        <PutContainer>
          <h1>갤러리 이름을 수정하시겠어요?</h1>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <Input
            type="text"
            name="galleryName"
            value={changeGallData.galleryName}
            placeholder=""
            onChange={handleInputChange}
          />
            <Button onClick={handleGallChange}>수정</Button>
            <Button onClick={handleGalldelete}>삭제</Button>
          </div>
        </PutContainer>

        <GalleryGrid>
          {galleryList &&
            galleryList.map((item) => (
              <StyledLink
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
              </StyledLink>
            ))}
        </GalleryGrid>

      </div>
    </div>
  );
};

export default Gallery;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 0 100px;
`;

const PutContainer = styled.div`
  background-color: #f3f3f3;
  margin: 50px auto;
  font-size: 18px;
  height: 200px;
  padding: 50px;
  border-radius: 25px;
`;

const Input = styled.input`
  border: none;
  padding: 5px;
  font-size: 18px;
  margin-left: 10px;
  height: 40px;
  border-radius: 5px;
`

const Button = styled.button`
  padding: 5px 10px;
  width: 80px;
  height: 50px;
  font-size: 18px;
  /* background-color: #007bff; */
  background-color: #95B9FF;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

