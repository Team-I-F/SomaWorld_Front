import { Link, useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import styled from "styled-components";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
  return (
    <HeadContainer>


        <HeadBox>
        <HeadTitle>SomaWorld</HeadTitle>

        <SearchBar/>    


        <div style={{ display: "flex", alignItems: "center" }}>
          {/* 로그인 안한 경우 */}
          
          <Link to={`/signup`} style={{ textDecoration: "none" }}>
            <Button name={"회원가입"} />
          </Link>
          <Link to={`/login`} style={{ textDecoration: "none" }}>
            <Button name={"로그인"} />
          </Link>

        {/* 로그인 한 경우 */}
        {/* <Button name={"새 글 작성"} /> */}
        
        </div>
        </HeadBox>

    </HeadContainer>
  );
}

export default Header;

const HeadContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;  
  height: 80px;
  border-bottom: 1px solid #b0b0b0;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: white;
`;

const HeadBox = styled.div`
  width: calc(100% - 400px);
  display: flex;
  position: fixed;
  height: 80px;
  border-bottom: 1px solid #b0b0b0;
  justify-content: space-between;
  align-items: center;
`;

const HeadTitle = styled.span`
  font-size: 35px;
  line-height: 44px;
  font-weight: bold;
`;
