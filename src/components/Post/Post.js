import * as S from "./style";

const Post = ({ title, description, coverImg, userName }) => {
  return (
    <S.PostTap>
      <S.Img alt="" src={coverImg} />
      <S.BottomBox>
        <S.Texts>
          <S.Title>{title}</S.Title>

          <S.Script>{description}</S.Script>

          <div style={{ display: "flex" }}>
            <S.Nickname>{userName}</S.Nickname>
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
