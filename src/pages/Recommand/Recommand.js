import * as S from "./style";

const Recommand = () => {
  return (
    <div>
      <S.Img src="/assets/img6.png" alt="이미지 설명"></S.Img>
      <S.SerchBox>
        <S.SearchBar type="text" style={{ textAlign: "center" }}></S.SearchBar>
      </S.SerchBox>
      <S.Div>
        <S.Text>🔥인기검색어</S.Text>
      </S.Div>
      <S.Boxs>
        <S.Box1 type="button">전체</S.Box1>
        <S.Box2 type="button">1학년</S.Box2>
        <S.Box3 type="button">2학년</S.Box3>
        <S.Box4 type="button">3학년</S.Box4>
        <S.Date>09.21 00:00 기준</S.Date>
      </S.Boxs>
      <div>
        <S.NumberAndSearchWord>
          <S.Number>1</S.Number>
          <S.SearchWord>연합해커톤</S.SearchWord>
          <S.Img1 src="/assets/pic7.png"></S.Img1>
        </S.NumberAndSearchWord>
        <S.NumberAndSearchWord>
          <S.Number>2</S.Number>
          <S.SearchWord>학과선택</S.SearchWord>
          <S.Img1 src="/assets/pic7.png"></S.Img1>
        </S.NumberAndSearchWord>
        <S.NumberAndSearchWord>
          <S.Number>3</S.Number>
          <S.SearchWord>노트북</S.SearchWord>
          <S.Img1 src="/assets/pic7.png"></S.Img1>
        </S.NumberAndSearchWord>
        <S.NumberAndSearchWord>
          <S.Number>4</S.Number>
          <S.SearchWord>해커톤</S.SearchWord>
          <S.Img1 src="/assets/pic7.png"></S.Img1>
        </S.NumberAndSearchWord>
        <S.NumberAndSearchWord>
          <S.Number>5</S.Number>
          <S.SearchWord>신입생</S.SearchWord>
          <S.Img1 src="/assets/pic7.png"></S.Img1>
        </S.NumberAndSearchWord>
        <S.NumberAndSearchWord>
          <S.Number>6</S.Number>
          <S.SearchWord>면접후기</S.SearchWord>
          <S.Img1 src="/assets/pic7.png"></S.Img1>
        </S.NumberAndSearchWord>
        <S.NumberAndSearchWord>
          <S.Number>7</S.Number>
          <S.SearchWord>공모전</S.SearchWord>
          <S.Img1 src="/assets/pic7.png"></S.Img1>
        </S.NumberAndSearchWord>
      </div>
    </div>
  );
};

export default Recommand;
