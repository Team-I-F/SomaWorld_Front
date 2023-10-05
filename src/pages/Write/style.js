import styled from "styled-components";

export const PostBox = styled.div`
  position: relative;
`;

export const Button = styled.button`
  padding: 10px 25px; /* 크기를 조정할 수 있는 패딩 추가 */
  background-color: #95b9ff; /* 원하는 색상으로 수정 */
  color: #fff; /* 버튼 텍스트 색상 설정 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; /* 원하는 폰트 크기로 수정 */
  position: absolute;
  top: 5px;
  right: 20px;

  &:hover {
    background-color: #3f8fff; /* 마우스 호버 시 변경할 색상 */
  }
`;

export const line = styled.div`
  border-top: 1px solid gray;
  margin-bottom: 50px;
`;

export const HeadTitle = styled.span`
  font-size: 35px;
  line-height: 44px;
  font-style: normal;
  margin: 5px 0px 0px 40px;
  font-family: "Akaya Telivigala", cursive;
  font-weight: bold;
`;

export const Head = styled.div`
  display: flex;
`;