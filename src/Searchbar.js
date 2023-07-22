import React, { useState } from "react";

function Searchbar({ onSearch }) {
  const [description, setDescription] = useState("");

  function handleSearch(event) {
    setDescription(event.target.value);
    // Pass the entered description back to the parent component
    onSearch(event.target.value);
    console.log(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder="search transaction description"
      value={description}
      onChange={handleSearch}
    />
  );
}

export default Searchbar;
