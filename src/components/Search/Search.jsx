import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchTracks } from '../../utils/api';
import { setCurrentTrack } from '../../redux/slices/currentTrackSlice';
// import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  const handleSearch = (e) => {
    e.preventDefault();
    if (token && query) {
      searchTracks(token, query).then((response) => {
        if (response.data.tracks.items.length > 0) {
          dispatch(setCurrentTrack(response.data.tracks.items[0]));
        }
      });
    }
  };

  return (
    <div className="search">
      <h2>Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a track"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
