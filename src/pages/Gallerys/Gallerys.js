import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getgalleryList } from "../../utils/api/board";
import { createGallery } from "../../utils/api/gallery";

const Gallerys = () => {

  const [createGallData, setCreateGalldata] = useState({
    galleryName: ""
  });

  const handleWrite = async () => {
    try {
      const data = {
        ...createGallData,
      };
      const createdGall = await createGallery(data);
      console.log("갤러리 생성 완료:", createdGall);

    } catch (error) {
      console.log("갤러리 생성 실패:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateGalldata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(createGallData)
  };


  const [gallerys, setGallerys] = useState([]);

  function initialgallerys() {
    const response = getgalleryList();

    setGallerys(getgalleryList());

    response
    .then(function (data) {
      setGallerys(data.data);
      console.log(response);
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
        <div>
            <input
              type="text"
              name="galleryName"
              value={createGallData.galleryName}
              onChange={handleInputChange}
              placeholder="갤러리이름"
            /> 
            <button onClick={handleWrite}>갤러리 생성!</button>
        </div>
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
