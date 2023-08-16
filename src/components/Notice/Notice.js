import * as S from "./style";
<<<<<<< HEAD

function Notice() {
  return (
    <S.Notice>
      <S.NoticeButton1>
        <S.ButtonImg1 src="assets/img6.png"></S.ButtonImg1>
      </S.NoticeButton1>

      <S.NoticeBox>
        <img src="assets/img7.png" alt="hihi"></img>
        <div
          style={{ marginTop: "100px", marginLeft: "70px", fontWeight: "600" }}
        >
          <S.NoticeScript>10월 15일,</S.NoticeScript>
          <br />
          <S.NoticeScript>부소마 4기 신입생 피드 open!</S.NoticeScript>
        </div>
      </S.NoticeBox>

      <S.NoticeButton2>
        <S.ButtonImg2 src="assets/img6.png"></S.ButtonImg2>
      </S.NoticeButton2>
    </S.Notice>
  );
}

export default Notice;
=======
// import arrow from "./assets/arrow.png";

function NoticeBox() {
  return <div>{/* <img src={arrow} alt="아" /> */}</div>;
}

export default NoticeBox;
>>>>>>> 792d867909bf8542aab170642137010a02a888d2
