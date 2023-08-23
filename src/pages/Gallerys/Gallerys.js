import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getgalleryList } from "../../utils/api/board";
import axios from "axios";

const Gallerys = () => {

  const [gallerys, setGallerys] = useState([]);

  function initialgallerys() {
    const response = getgalleryList();
    
    


    setGallerys(getgalleryList());
    // axios.get("http://10.150.149.25:3000/board").then((res) => {
    //   console.log('data',res.data);
    // })

    // response
    // .then(function (data) {
    //   setGallerys(data.data);
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    
  }

  useEffect(() => {
    initialgallerys();
  }, []);

  console.log(gallerys);

  return (
    <div>
      <div>
        <h1>갤러리들</h1>
        {gallerys && gallerys.length > 0 ? (
          gallerys.map((board) => (
            <Link to={`/gallery/${board.galleryId}`}>
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
