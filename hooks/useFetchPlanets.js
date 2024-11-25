import { useState, useEffect } from "react";

export const useFetchPlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlanets = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ucu-planetario.loca.lt/planets", {
        headers: { 'bypass-tunnel-reminder': 'true' },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch planets");
      }
      const data = await response.json();
      setPlanets(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return { planets, loading, error};
};

