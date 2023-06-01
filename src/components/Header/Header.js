import SearchBar from "../SearchBar/SearchBar";
import * as S from "./style";

function Header() {
  return (
    <S.Head>
      <div className="Header">
        <img alt="logo" className="logo" />
        <SearchBar />
      </div>
    </S.Head>
  );
}

export default Header;
