import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import * as S from "./style";

export default function Main() {
  return (
    <div>
      <Header />
      <div>
        <S.Head>🔥인기글</S.Head>
        <Post />
      </div>
    </div>
  );
}
