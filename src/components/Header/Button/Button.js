import styled from "styled-components";

const StyledButton = styled.span`
  font-style: normal;
  line-height: 29px;
  float: right;
  margin-right: 10px;
  color: gray;
  font-weight: bold;
`;


function Button({ name }) {
  return <StyledButton>{name}</StyledButton>;
}

export default Button;

