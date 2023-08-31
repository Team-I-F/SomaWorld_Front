import React, { useEffect, useState } from "react";
import { getgallery } from "../../utils/api/board";

import { Link, useParams } from "react-router-dom";
import { deleteGallery } from "../../utils/api/gallery";

const Gallery = () => {
  const { boardID } = useParams();

  const [galleryList, setGalleryList] = useState([])

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

  const handleDelete = async () => {
    try {
      const deletedGall = await deleteGallery(boardID);
      console.log("갤러리 삭제 완료:", deletedGall);

    } catch (error) {
      console.log("갤러리  실패:", error.message);
    }
  };

  useEffect(() => {
    fetchGallery();
    console.log(boardID)
  }, [boardID]);

  return (
    <div>
      <h1>갤러리</h1>
      <div>
        삭제할거~
        <button onClick={handleDelete}>갤삭버튼쓰</button>
      </div>
      {galleryList &&
        galleryList.map((item) => (
          <Link to={`/gallery/${boardID}/${item.tableID}`} key={item.tableID}>
            <div>
              <h1>{item.tableID}</h1>
              <h1>{item.title}</h1>
              <span>{item.views}</span>
              <p>{item.created}</p>
              <p>{item.userNickname}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Gallery;
