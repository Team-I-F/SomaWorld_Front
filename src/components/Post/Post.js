import * as S from "./style";

const Post = () => {
  return (
    <S.PostTap>
      <S.Img />
      <S.BottomBox>
        <S.Texts>
          <S.Title>심지혜가 자퇴를???</S.Title>

          <S.Script>
            2023년 5월 심지혜씨가 돌연 자퇴를 선언했다. 남은 천나영씨는 홀로
            디자인 시스템과 프론트를 도맏게 되었다
          </S.Script>

          <div style={{ display: "flex" }}>
            <S.Nickname>oo</S.Nickname>
            <S.view>
              <div style={{ marginRight: "5px" }}>6</div>
              <S.like src="assets/img4.png" type="button"></S.like>
            </S.view>
          </div>
        </S.Texts>
      </S.BottomBox>
    </S.PostTap>
  );
};

export default Post;
