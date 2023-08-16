import Button from "./Button/Button";
import * as S from "./style";

function Header() {
  return (
    <div>
      <S.Head>
<<<<<<< HEAD
        <S.HeadTitle>SomaWorld</S.HeadTitle>

        <S.Buttons>
          <S.SearchButton type="button" src="assets/img.png"></S.SearchButton>
          <Button name={"로그인"} />
          <Button name={"회원가입"} />
        </S.Buttons>
      </S.Head>
      <S.line></S.line>
=======
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
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
    </div>
  );
}

export default Header;
