import Button from "./Button/Button";
import * as S from "./style";

function Header() {
  return (
    <div>
      <S.Head>
        <S.HeadTitle>somaworld</S.HeadTitle>
        <S.Buttons>
          <Button name={"로그인"} />
          <Button name={"회원가입"} />
          <Button name={"마이페이지"} />
        </S.Buttons>
      </S.Head>
      <S.Search>
        <S.Searchbox type="Text" placeholder="검색하시오"></S.Searchbox>
        <S.SearchButton>검색</S.SearchButton>
      </S.Search>
      <S.Box>
        <p>소마월드에 오신 것을 환영합니다~!</p>
      </S.Box>
    </div>
  );
}

export default Header;
