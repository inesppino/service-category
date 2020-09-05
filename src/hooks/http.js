import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url).then(response => {
      return response.json()
    })
      .then(data => {
        setFetchedData(data);
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      })
  }, dependencies);

  return [ fetchedData, isLoading ];
}