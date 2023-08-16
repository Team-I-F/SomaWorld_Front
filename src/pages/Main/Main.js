import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
<<<<<<< HEAD
import Notice from "../../components/Notice/Notice";
import Footer from "../../components/Footer/Footer";

import PostData from "./dummy";
=======
>>>>>>> 792d867909bf8542aab170642137010a02a888d2

import * as S from "./style";

const MainPage = () => {
  return (
    <div>
      <Header />
<<<<<<< HEAD
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
          {PostData.map((item) => (
            <Post
              title={item.title}
              description={item.description}
              coverImg={item.coverImg}
              userName={item.userName}
            />
          ))}
        </div>
      </div>

      <Footer />
=======
      <S.Head>🔥인기글</S.Head>

      <div style={{ margin: "auto 100px", backgroundColor: "aliceblue" }}></div>
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
    </div>
  );
};

export default MainPage;
