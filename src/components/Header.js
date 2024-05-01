import React from "react";
import Search from "./Search";

function Header({ searchFilter, setSearchFilter, handleSearchListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchFilter} setSearchTerm={setSearchFilter} onSearch={handleSearchListings} />
    </header>
  );
}

export default Header;
