import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Notice from "../../components/Notice/Notice";
import Footer from "../../components/Footer/Footer";

import { useEffect, useState } from "react";
import { getgallery } from "../../utils/api/board";
import styled from "styled-components";

const MainPage = () => {

  const [postList, setPostList] = useState([])

  function fetchGallery() {
    const response = getgallery(1);
    response
      .then(function (data) {
        setPostList(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchGallery();
    console.log(postList)
  }, []);  


  return (
    <div>
      <Header />

      <div style={{ paddingTop: '100px', margin: 'auto 200px'}}>

      <Notice />

      <PostTabTitle>
        소마월드와 함께 다양한 이야기를 해보세요.
      </PostTabTitle>

      <div style={{ justifyContent: "center"}}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: '30px',
            marginBottom: '100px'
          }}
        >

          {/*
            이건 걍.. 서버 꺼져서
          {postList.map((item) => (
            <Post
              title={item.title}
              description={item.description}
              // coverImg={item.coverImg}
              userName={item.userNickname}
              views={item.views}
            />
          ))} */}

          <Post
              title={"히히"}
              // coverImg={item.coverImg}
              userName={"ㅋ"}
              views={"100"}
            />

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
