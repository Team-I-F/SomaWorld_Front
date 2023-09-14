import { Link, useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import styled from "styled-components";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
  return (
    <HeadBox>
      <HeadInBox>
        <HeadTitle>SomaWorld</HeadTitle>

        <SearchBar/>    


        <div style={{ display: "flex", alignItems: "center" }}>
          {/* 로그인 안한 경우 */}
          {/* <Link to={`/signup`} style={{ textDecoration: "none" }}>
            <Button name={"회원가입"} />
          </Link>
          <Link to={`/login`} style={{ textDecoration: "none" }}>
            <Button name={"로그인"} />
          </Link> */}

          {/* 로그인 한 경우 */}
          <Button name={"새 글 작성"} />
        </div>
      </HeadInBox>
    </HeadBox>
  );
}

export default Header;

const HeadInBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 200px;
`;

const HeadBox = styled.div`
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1px solid #b0b0b0;
  position: fixed;
  z-index: 1;
  background-color: white;
`;

const HeadTitle = styled.span`
  font-size: 35px;
  line-height: 44px;
  font-weight: bold;
`;
