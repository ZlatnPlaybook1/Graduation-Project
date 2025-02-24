import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const SearchIcon = ({ searchTerm, setSearchTerm }) => {
  
  return (
    <div className="search-container" >
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
};

export default SearchIcon;
