import Button from "./Button/Button";
import * as S from "./style";

function Header() {
  return (
    <div>
      <S.Head style={{ margin: "auto 200px" }}>
        <S.HeadTitle>SomaWorld</S.HeadTitle>

        <S.Buttons>
          <S.SearchButton type="button" src="assets/img.png"></S.SearchButton>
          <Button name={"로그인"} />
          <Button name={"회원가입"} />
        </S.Buttons>
      </S.Head>
      <S.line></S.line>
    </div>
  );
}

export default Header;
