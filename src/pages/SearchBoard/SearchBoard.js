import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import customAxios from "../../utils/axios/axios";

const SearchBoardPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [galleryId, setGalleryId] = useState(""); // State for galleryId

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search).get("titles");
    const galleryIdParam = new URLSearchParams(location.search).get("galleryId"); // Get galleryId from query parameter
    if (searchParam && galleryIdParam) {
      setSearchTerm(searchParam);
      setGalleryId(galleryIdParam); // Set galleryId in state
      handleSearch(galleryIdParam, searchParam);
    }
  }, [location.search]);

  const handleSearch = async (galleryId, titles) => {
    try {
      const response = await customAxios.get(`/board/search/${galleryId}/${titles}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?galleryId=${galleryId}&titles=${searchTerm}`);
    handleSearch(galleryId, searchTerm);
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
            <li key={result.tableId}>
              <div>{result.title}</div>
              <div>{result.userNickname}</div>
              <div>{result.created}</div>
              <div>{result.views} views</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchBoardPage;
