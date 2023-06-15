import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Notice from "../../components/Notice/Notice";
import Footer from "../../components/Footer/Footer";

import * as S from "./style";

const MainPage = () => {
  return (
    <div>
      <Header />
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
