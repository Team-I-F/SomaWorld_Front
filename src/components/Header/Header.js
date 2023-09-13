import { Link } from "react-router-dom";
import Button from "./Button/Button";
import styled from "styled-components";

function Header() {
  return (
      <HeadBox>
        <HeadInBox>

        <HeadTitle>SomaWorld</HeadTitle>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          
          {/* 로그인 안한 경우 */}

          <Link to={`/signup`} style={{ textDecoration: "none" }}>
            <Button name={"회원가입"} />    
          </Link>
          <Link to={`/login`} style={{ textDecoration: "none" }}>
            <Button name={"로그인"}/>
          </Link>

          {/* 로그인 한 경우 */}
 
          {/* <Search>
            <SearchImg src="assets/img.png"/>
            <SearchInput type="text" />
          </Search>
          <Button name={"새 글 작성"}/> */}

        </div>

        </HeadInBox>


        {/* <Buttons>
          <SearchButton type="button" src="assets/img.png"></SearchButton>
          <Button name={"로그인"}/>
          <Button name={"회원가입"} />
        </Buttons> */}
      </HeadBox>
  );
}

export default Header;

const HeadInBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 200px;
`

const HeadBox = styled.div`
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1px solid #B0B0B0;
  position: fixed;
  z-index: 1;
  background-color: white;
`;

const HeadTitle = styled.span`
  font-size: 35px;
  line-height: 44px;
  font-weight: bold;
`;

const Search = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 100px;
  padding: 10px 12px;
  font-size: 14px;
  background-color: #F3F3F3;
`;

const SearchImg = styled.img`
  
  width: 30px;
  height: 30px;
  
  position : absolute;

  top: 5px;
  left: 15px;

`;
