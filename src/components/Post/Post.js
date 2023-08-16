import * as S from "./style";

<<<<<<< HEAD
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
=======
const Post = ({ table }) => {
  return (
    <div>
      <h1>{table.tableID}</h1>
      <h1>{table.title}</h1>
      <h1>{table.created}</h1>
      <h1>{table.views}</h1>
      <h1>{table.userNickname}</h1>
      <h1>{table.description}</h1>
    </div>
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
  );
};

export default Post;
