import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  const filteredListings = listings.filter((listing) =>
    searchFilter === ""
      ? listing
      : listing.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

  function handleSearchListings(search) {
    setSearchFilter(search);
  }
  return (
    <div className="app">
      <Header searchFilter={searchFilter} setSearchFilter={setSearchFilter} handleSearchListings={handleSearchListings} />
      <ListingsContainer
        setListings={setListings}
        listings={filteredListings}
      />
    </div>
  );
}

export default App;
