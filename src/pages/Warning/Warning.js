import * as S from "./style";

const Warning = () => {
  return (
    <div>
      <div>
        <S.Warning>경고!</S.Warning>
        <S.Text>'ㅅㄲ'라는 욕이 감지되었어요</S.Text>
      </div>
      <S.Img1 src="/assets/img25.png"></S.Img1>
      <S.Button type="button">버튼</S.Button>
    </div>
  );
};

export default Warning;
