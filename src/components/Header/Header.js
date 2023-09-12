import Button from "./Button/Button";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <HeadBox>
        <BokBut>

        <HeadTitle>SomaWorld</HeadTitle>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          
          {/* 로그인 안한 경우 */}

          <Button name={"회원가입"} />
          <Button name={"로그인"}/>


          {/* 로그인 한 경우 */}
          
          {/* <Search>
            <SearchInput type="text" placeholder="검색어 입력" />
            <SearchImg src="assets/img.png" style={{color: 'red'}}/>
          </Search> */}

        </div>

        </BokBut>


        {/* <Buttons>
          <SearchButton type="button" src="assets/img.png"></SearchButton>
          <Button name={"로그인"}/>
          <Button name={"회원가입"} />
        </Buttons> */}
      </HeadBox>
      <line></line>
    </div>
  );
}

export default Header;

const BokBut = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 200px;
`

const HeadBox = styled.div`
  padding: 10px;
  border-bottom: 1px solid #B0B0B0;
`;

const HeadTitle = styled.span`
  font-size: 35px;
  line-height: 44px;
  font-style: normal;
  margin: 5px 0px 0px 40px;
  font-weight: bold;
  font-family: Cafe24Ssurround;
`;

const Search = styled.div`
  position: relative;
  width: 200px;
  background-color: antiquewhite;
`;

const SearchInput = styled.div`
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 14px;

`;

const SearchImg = styled.div`
  background-color: aliceblue;
`;
