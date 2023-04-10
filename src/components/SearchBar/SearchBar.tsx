import React, { ChangeEvent, useState } from 'react';
import './SearchBar.css';
import getMovies from '../GetMovies/GetMovies';
import ProductsRender from '../ProductsRender/ProductsRender';
import { IProduct } from 'types/types';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') ?? '');
  const [movies, setMovies] = useState<IProduct[]>([]);

  function handleInputChange(e: { target: { value: string } }) {
    setSearchValue(e.target.value);
  }

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem('searchValue', searchValue);
    const movies = await getMovies(searchValue);
    // console.log('movies', movies);
    setMovies(movies);
  }

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <h3> {searchValue}</h3>
      <div className="card-container">
        <ProductsRender movies={movies} />
      </div>
    </>
  );
}

export default SearchBar;
