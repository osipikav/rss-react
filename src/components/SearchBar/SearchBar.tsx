import React, { useEffect, useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') ?? '');

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  function handleInputChange(event: { target: { value: string } }) {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <input
        className="search"
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <h3> {searchValue}</h3>
    </>
  );
}

export default SearchBar;
