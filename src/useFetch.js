import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal: abortCont.signal });
        if (!response.ok) {
          throw Error('Could not fetch data from that resource');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setError(err.message);
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
    
    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
    setData,
  };
};

export default useFetch;
