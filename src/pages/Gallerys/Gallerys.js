import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getgalleryList } from "../../utils/api/board";

const Gallerys = () => {

  const [gallerys, setGallerys] = useState([]);

  function initialgallerys() {
    const response = getgalleryList();
    
    setGallerys(getgalleryList());

    response
    .then(function (data) {
      setGallerys(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  useEffect(() => {
    initialgallerys();
  }, []);



  return (
    <div>
      <div>
        <h1>갤러리들</h1>
        {gallerys && gallerys.length > 0 ? (
          gallerys.map((board) => (
            <Link to={`/gallery/${board.galleryId}`} key={board.galleryId}>
              <div key={board.galleryId}>
                <h1>{board.galleryId}</h1>
                <p>{board.galleryName}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Gallerys;
