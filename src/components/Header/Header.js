import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { loginCheck, logoutUser } from "../../services/auth/api";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../utils/recoil/recoil";

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const location = useLocation();
  const isGalleryPage = location.pathname === "/";
  const isGalleryWithNumber = location.pathname.startsWith("/gallery/");
  

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
  };

  return (
    <HeadContainer>
        <HeadBox>
        <HeadTitle onClick={()=>console.log("isLoggedIn: ", isLoggedIn)}>SomaWorld</HeadTitle>

        <SearchBar/>    

        <div style={{ display: "flex", alignItems: "center" }}>

        {isLoggedIn ? (
          <>
            {location.pathname === "/" && 
              <StyledLink to={'/gallery'}>
                <Button name={"갤러리 생성"} />
              </StyledLink>
            }
            <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
          </>
          ) : (
          <>
            <Link to={`/signup`} style={{ textDecoration: "none" }}>
              <Button name={"회원가입"} />
            </Link>
            <Link to={`/login`} style={{ textDecoration: "none" }}>
              <Button name={"로그인"} />
            </Link>
          </>
          )}
        </div>
        </HeadBox>
    </HeadContainer>
  );
}

export default Header;

const HeadContainer = styled.div`
  display: flex;
  /* position: fixed; */
  position: sticky;
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


const StyledButton = styled.span`
  font-style: normal;
  padding: 5px 20px;
  border-radius: 25px;
  font-weight: bold;
  color: #95B9FF;
  border: 2px solid #95B9FF;
`

const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
`