import * as S from "./style";

export const Comment = () => {
  return (
    <div>
      <S.Text>댓글 12개</S.Text>
      <S.TextBox type="text"></S.TextBox>
      <S.Container>
        <S.Img1 src="/assets/img31.png"></S.Img1>
        <S.NickName>빵빵아!옥지얌!</S.NickName>
        <S.Hour>2시간전</S.Hour>
        <S.Comment1>감사합니다!도움이 많이 되었어요</S.Comment1>
        <S.Arrow1 src="/assets/img26.png"></S.Arrow1>
        <S.Reply1>답글 7개</S.Reply1>
      </S.Container>

      <S.Container>
        <S.Img1 src="/assets/img31.png"></S.Img1>
        <S.NickName>빵빵아!옥지얌!</S.NickName>
        <S.Hour>1시간전</S.Hour>
        <S.Comment2>감사합니다!도움이 많이 되었어요</S.Comment2>
        <S.Arrow2 src="/assets/img26.png"></S.Arrow2>
        <S.Reply2>답글 6개</S.Reply2>
      </S.Container>

      <S.Container>
        <S.Img1 src="/assets/img31.png"></S.Img1>
        <S.NickName>빵빵아!옥지얌!</S.NickName>
        <S.Hour>2시간전</S.Hour>
        <S.Comment3>감사합니다! ㅋㅋ</S.Comment3>
        <S.Arrow3 src="/assets/img27.png"></S.Arrow3>
        <S.Reply3>답글 3개</S.Reply3>
      </S.Container>
    </div>
  );
};

export default Comment;
