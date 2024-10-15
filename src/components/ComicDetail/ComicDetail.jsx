import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ComicDetail = () => {
  const { id } = useParams();
  const { data: comic, loading, error } = useFetch(`comics/${id}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error al realizar la consulta</div>;

  const selectedComic = comic[0];
  return (
    <div>
      <h2>{selectedComic.title}</h2>
      <img
        src={`${selectedComic.thumbnail.path}.${selectedComic.thumbnail.extension}`}
        alt={selectedComic.title}
      />
    </div>
  );
};

export default ComicDetail;
