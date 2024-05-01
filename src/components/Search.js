import React from "react";

function Search({ searchTerm, setSearchTerm, onSearch }) {
  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the form from reloading the page
    console.log("submitted"); // Log "submitted" to the console (for testing)
    onSearch(searchTerm); // Call the onSearch function with the current searchTerm
  }

  // Function to handle changes in the search input field
  function handleChange(e) {
    setSearchTerm(e.target.value); // Update the searchTerm with the value typed into the input field
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      {/* Input field for typing the search query */}
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm} // Display the current value of searchTerm in the input field
        onChange={handleChange} // Call handleChange function when the input value changes
      />
      {/* Button to submit the search query */}
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
