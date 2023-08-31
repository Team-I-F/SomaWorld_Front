import React, { useEffect, useState } from "react";
import { getgallery } from "../../utils/api/board";
import { Link, useParams } from "react-router-dom";

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

  useEffect(() => {
    fetchGallery();
    console.log(boardID)
  }, [boardID]); // Dependency 배열에 boardID 추가하여 boardID가 변경될 때마다 useEffect 호출

  return (
    <div>
      <h1>갤러리</h1>

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
