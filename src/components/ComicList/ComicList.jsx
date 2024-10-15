import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SearchBar from "../SearchBar";
import { useState } from "react";

const ComicList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const queryParams = searchTerm ? `?titleStartsWith=${searchTerm}` : "";
  const { data: comics, loading, error } = useFetch("comics", queryParams);
  console.log(comics, "data comics");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error al realizar la consulta</div>;
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h2 className="mb-12 text-[48px]">Listado de Comics</h2>
      <ul className="flex flex-wrap gap-y-4">
        {comics.map((comic) => (
          <li className="w-1/3 shadow-md" key={comic.id}>
            <Link to={`/comics/${comic.id}`} className="block p-4 h-full">
              {comic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComicList;
