import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  function handleDeleteListing(id) {
    const filteredListings = listings.filter((listing) => listing.id !== id);
    setListings(filteredListings);

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(data => console.log(data))
    .catch(error => console.error(error))
  }
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map(listing => <ListingCard onDeleteListing={()=>handleDeleteListing(listing.id)} key={listing.id} listing={listing} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
