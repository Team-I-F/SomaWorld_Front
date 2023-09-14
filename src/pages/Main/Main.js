import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Notice from "../../components/Notice/Notice";
import Footer from "../../components/Footer/Footer";

import { useEffect, useState } from "react";
import { getgalleryList } from "../../utils/api/board";
import styled from "styled-components";
import GalleryItem from "../Gallerys/Post";

const MainPage = () => {
  const [gallerys, setGallerys] = useState([]);

  useEffect(() => {
    async function fetchGalleryList() {
      try {
        const response = await getgalleryList();
        setGallerys(response.data); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchGalleryList(); 

  }, []);



  return (
    <div>

    <Header />

      <div style={{ margin: 'auto 200px'}}>

      <div style={{height: '120px'}}></div>
      
      <Notice />
      <PostTabTitle>
        소마월드와 함께 다양한 이야기를 해보세요.
      </PostTabTitle>

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",            
            gap: '30px', 
            marginBottom: '100px',
            justifyContent: 'center'
          }}
        >
          {gallerys.map((item) => (
            <GalleryItem
              title = {item.title}
            />
          ))}

        </div>
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

const PostTabTitle = styled.p`
  font-size: 30px;
  display: flex;
  font-weight: 600
`;
