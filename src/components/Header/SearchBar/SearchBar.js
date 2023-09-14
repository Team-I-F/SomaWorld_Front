import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SearchBar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate(`/search?term=${searchTerm}`);
    };
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Search>
                <SearchImg src="assets/img.png" />
                <SearchInput
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="검색어를 입력하세요..."
                />
            </Search>
            </form>
        </div>
    );
  }
  
  export default SearchBar;
  
  const Search = styled.div`
  position: relative;
  display: flex;
  width: 550px;
  border-radius: 5px;
  padding: 12px 5px;
  background-color: #f3f3f3;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  outline: none;
  background-color: #f3f3f3;
`;

const SearchImg = styled.img`
    margin: auto 5px;
    width: 20px;
    height: 20px;
`;
