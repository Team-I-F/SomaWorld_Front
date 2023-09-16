import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getgalleryList } from "../../utils/api/board";
import { createGallery } from "../../utils/api/gallery";
import { loginCheck } from "../../services/auth/api";

const Gallerys = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [gallerys, setGallerys] = useState([]);
  const [createGallData, setCreateGalldata] = useState({
    galleryName: ""
  });

  const handleGallWrite = async () => {
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
    checkLoginStatus();
  }, []);


  const checkLoginStatus = async () => {
    try {
      const login = await loginCheck();
      console.log(login)
      setIsLoggedIn(login);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <div>
      <div
                onClick={() => checkLoginStatus()}
                style={{ backgroundColor: "red", cursor: "pointer" }}
              >
                로그인 확인
              </div>
        <h1>갤러리들</h1>
        <div>
            <input
              type="text"
              name="galleryName"
              value={createGallData.galleryName}
              onChange={handleInputChange}
              placeholder="갤러리이름"
            /> 
            <button onClick={handleGallWrite}>갤러리 생성!</button>
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
