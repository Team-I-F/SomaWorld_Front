import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <div style={{marginLeft: '250px'}}>
        <FooterImg src="assets/img8.png"></FooterImg>
        <span style={{ fontWeight: "550" }}>
          소마월드에 오신 것을 환영합니다~!
        </span>
      </div>
    </StyledFooter>
  );
}

export default Footer;



const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;

  background-color: #95b9ff;
  height: 40px;
  width: 100%;

  color: white;
  display: flex;
  align-items: center;
`;

const FooterImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
