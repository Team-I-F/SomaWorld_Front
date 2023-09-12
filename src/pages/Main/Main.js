import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Notice from "../../components/Notice/Notice";
import Footer from "../../components/Footer/Footer";

import * as S from "./style";
import { useEffect, useState } from "react";
import { getgalleryList } from "../../utils/api/board";

const MainPage = () => {

  const [galleryList, setGalleryList] = useState([])

  function fetchGallery() {
    const response = getgalleryList();
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
    console.log(galleryList)
  }, []);  


  return (
    <div>
      <Header />

      <div style={{ paddingTop: '100px'}}>

      <Notice />

      <S.PostTabTitle
        style={{ fontFamily: "Cafe24Ssurround", fontWeight: "600" }}
      >
        소마월드와 함께 다양한 이야기를 해보세요.
      </S.PostTabTitle>

      <div style={{ justifyContent: "center" }}>
        <div
          style={{
            margin: "0px auto",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            width: "1300px",
          }}
        >
          {galleryList.map((item) => (
            <Post
              title={item.galleryName}
              // coverImg={item.coverImg}
            />

            // <Post
            //   title={item.title}
            //   description={item.description}
            //   // coverImg={item.coverImg}
            //   userName={"item.userName"}
            // />
          ))}
        </div>
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
