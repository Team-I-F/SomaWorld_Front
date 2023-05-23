import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import customAxios from "../../utils/axios/axios";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
      // handle error
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    navigate(`/search?term=${searchTerm}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

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
