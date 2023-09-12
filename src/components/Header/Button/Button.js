import styled from "styled-components";

const StyledButton = styled.span`
  font-style: normal;
  padding: 5px 20px;
  border-radius: 25px;
  font-weight: bold;
  color: gray;

  ${({name}) =>
    name === "회원가입" &&
    `
      color: #95B9FF;
      border: 2px solid #95B9FF;
    `}

  ${({name}) =>
    name === "로그인" &&
    `
      border: none;
    `}

  ${({name}) =>
    name === "새 글 작성" &&
    `
      color: #95B9FF;
      border: 2px solid #95B9FF;
      margin: auto 50px;
    `}
`;

function Button({ name }) {
  return <StyledButton name={name}>{name}</StyledButton>;
}

export default Button;
