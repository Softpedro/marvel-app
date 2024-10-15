import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const useFetch = (endpoint, queryParams = "") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
      const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
      const ts = new Date().getTime();
      const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

      const url = `https://gateway.marvel.com/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}${queryParams}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const result = await response.json();
        setData(result.data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, queryParams]);

  return { data, loading, error };
};

export default useFetch;
