import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import customAxios from "../../utils/axios/axios";
import styled from "styled-components";
import arrowDown from "../../assets/arrow-down.png";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search).get("term");
    if (searchParam) {
      setSearchTerm(searchParam);
      handleSearch(searchParam);
    }
  }, [location.search]);

  const handleSearch = async (term) => {
    try {
      const response = await customAxios.get(`/board/search/title/${term}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    navigate(`/search?term=${searchTerm}`);
  };

  return (
    <div>

    <LoginIcon
        style={{ transform: "rotate(90)" }}
        src={arrowDown}
        alt="아으"
    />
    
    <div>
      <Search onSubmit={handleSubmit} style={{margin: '0 auto'}}>
        <SearchImg src="assets/img.png" />
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요..."
        />
      </Search>
    </div>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <div>{result.title}</div>
              <div>{result.userNickname}</div>
              <div>{result.created}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchPage;

const Search = styled.form`
position: relative;
display: flex;
width: 1200px;
border-radius: 5px;
padding: 20px 20px;
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

const LoginIcon = styled.img`
  transform: rotate(180deg);
  width: 50px;
  height: 50px;
  margin: 40px 150px;
`;
