import Button from "./Button/Button";
import * as S from "./style";

function Header() {
  return (
    <div>
      <S.Head>
        <S.HeadTitle>somaworld</S.HeadTitle>
        <img src="file:///Users/cheonnayeong/Downloads/search.png" alt=""></img>
        <S.Buttons>
          <Button name={"로그인"} />
          <Button name={"회원가입"} />
        </S.Buttons>
      </S.Head>
      <S.line></S.line>
    </div>
  );
}

export default Header;
