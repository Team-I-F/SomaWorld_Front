import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

import * as S from "./style";

const MainPage = () => {
  return (
    <div>
      <Header />
      <S.Head>🔥인기글</S.Head>

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
      </div>
    </div>
  );
};

export default MainPage;
