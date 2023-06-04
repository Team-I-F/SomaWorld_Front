import styled from "styled-components";

export const Head = styled.div`
  display: flex;
`;

export const HeadTitle = styled.span`
  font-size: 35px;
  line-height: 44px;
  font-style: normal;
  margin: 5px 0px 0px 40px;
`;

export const Buttons = styled.div`
  margin-left: auto;
  margin-top: 10px;
  text-align: right;
`;

export const line = styled.div`
  border-top: 1px solid gray;
  margin-bottom: 50px;
`;

// export const Search = styled.div`
//   display: flex;
//   margin-left: auto;
//   margin-right: 20px;
//   height: 40px;
//   width: 400px;
//   border: 1px solid lightgrey;
//   background: #ffffff;
// `;

// export const Searchbox = styled.input`
//   font-size: 16px;
//   width: 325px;
//   padding: 15px;
//   border: 0px;
//   float: left;
//   outline: none;
// `;

export const SearchButton = styled.button`
  width: 50px;
  height: 100%;
  border: 0px;
  padding: 10px;
  background-color: lightgrey;
  float: right;
  color: #ffffff;
  outline: none;
`;
