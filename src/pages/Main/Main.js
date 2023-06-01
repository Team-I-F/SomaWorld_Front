import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

import * as S from "./style";

const MainPage = () => {
  return (
    <div>
      <Header />
      <S.Head>🔥인기글</S.Head>

      <div style={{ margin: "auto 100px", backgroundColor: "aliceblue" }}>
        <S.posts>
          <Post />
          <Post />
          <Post />
          <Post />

          <Post />
          <Post />
          <Post />
          <Post />
        </S.posts>
      </div>
    </div>
  );
};

export default MainPage;
