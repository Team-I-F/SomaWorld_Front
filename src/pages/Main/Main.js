import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import * as S from "./style";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div>
        <S.Head>🔥인기글</S.Head>
        <Post />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
