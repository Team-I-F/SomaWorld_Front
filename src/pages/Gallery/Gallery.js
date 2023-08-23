import { useEffect, useState } from "react";
import { getgallery } from "../../utils/api/board";
import { Link, useParams } from "react-router-dom";

const Gallery = () => {
  const { galleryID } = useParams();

  const [gallery, setGallery] = useState([])

  function initialgallery() {
  
   const response = getgallery(galleryID);

   response
   .then(function (data) {
     setGallery(data.data);
     console.log(gallery);
   })
   .catch((error) => {
     console.log(error);
   });

  
  }

  useEffect(() => {
    initialgallery();
    console.log(gallery);
  }, []);

  return (
    <div>
      <h1>갤러리</h1>


      {gallery &&
        gallery.map((gallery) => (
          <Link to={`/gallery/${galleryID}/${gallery.tableID}`} key={gallery.tableID}>
            <div>
              <h1>{gallery.tableID}</h1>
              <h1>{gallery.title}</h1>
              <span>{gallery.views}</span>
              <p>{gallery.created}</p>
              <p>{gallery.userNickname}</p>
            </div>
          </Link>
        ))}


    </div>
  );
};

export default Gallery;



