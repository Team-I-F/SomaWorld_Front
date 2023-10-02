import * as S from "./style";

const MyPage = () => {
  return (
    <S.MyPage>
      화살표~
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "red",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <S.NickName>
            <S.label>닉네임</S.label>
            <S.TextBox type="text"></S.TextBox>
          </S.NickName>

          <S.oneliner>
            <S.label>한줄소개</S.label>
            <S.TextBox type="text"></S.TextBox>
          </S.oneliner>

          <S.Tag>
            <S.label>해시태그</S.label>
            <S.TextBox type="text"></S.TextBox>
          </S.Tag>
        </div>
        <button>완료</button>
      </div>
    </S.MyPage>
  );
};

export default MyPage;
