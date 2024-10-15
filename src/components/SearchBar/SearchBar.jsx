import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
