import React, { ChangeEvent, useEffect, useState } from 'react';
import './SearchBar.css';
import getMovies from '../GetMovies/GetMovies';
import ProductsRender from '../ProductsRender/ProductsRender';
import { IProduct } from 'types/types';
import Spiner from '../Spiner/Spiner';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') ?? '');
  const [movies, setMovies] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleInputChange(e: { target: { value: string } }) {
    setSearchValue(e.target.value);
  }

  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    localStorage.setItem('searchValue', searchValue);
    setIsLoading(true);
    const movies = await getMovies(searchValue);
    setMovies(movies);
    setIsLoading(false);
  }

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const movies = await getMovies(searchValue);
      setMovies(movies);
      setIsLoading(false);
    }
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {movies !== undefined ? (
          isLoading ? (
            <Spiner />
          ) : (
            <ProductsRender movies={movies} />
          )
        ) : (
          <div>Not found</div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
