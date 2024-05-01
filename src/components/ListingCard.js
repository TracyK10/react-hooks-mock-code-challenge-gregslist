import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [like, setLike] = useState(false);

  function handleStarButton() {
    setLike(!like);
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {like ? (
          <button
            onClick={handleStarButton}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleStarButton} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={()=> onDeleteListing(listing.id)} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
