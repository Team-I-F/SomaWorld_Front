import * as S from "./style";

function Header() {
  return (
    <S.Head>
      <div className="Header">
        <img alt="logo" className="logo" />
        <div className="search-bar">
          <input type="text" />
        </div>
      </div>
    </S.Head>
  );
}

export default Header;
