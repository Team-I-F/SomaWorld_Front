import Header from "../../components/Header/Header";
import Notice from "../../components/Notice/Notice";
import Footer from "../../components/Footer/Footer";

import { useEffect, useState } from "react";
import { getgalleryList } from "../../utils/api/board";
import styled from "styled-components";
import GalleryItem from "../Gallerys/GalleryItem";
import { Link } from "react-router-dom";

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
        <GridContainer>
          {gallerys.map((item) => (
            <Link to={`gallery/${item.galleryId}`} style={{textDecoration: 'none', color: 'inherit'}} key={item.galleryId}>
              <GalleryItem
                title={item.galleryName}
              />
            </Link>
          ))}
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

const PostTabTitle = styled.p`
  font-size: 30px;
  display: flex;
  font-weight: 600;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 30px;
  justify-content: center;
  margin: 0 100px;
`;
