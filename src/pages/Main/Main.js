import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { loginCheck } from "../../utils/api/user";

import * as S from "./style";

const MainPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  function initialBoard() {
    const myPromise = loginCheck();
    myPromise
      .then(function (data) {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Header />
      <S.Head>🔥인기글</S.Head>

      <div style={{ margin: "auto 100px", backgroundColor: "aliceblue" }}></div>
      <button onClick={() => initialBoard()}>LoginCheck</button>
    </div>
  );
};

export default MainPage;
