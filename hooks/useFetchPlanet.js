import { useState, useEffect } from 'react';

export const useFetchPlanet = (id) => {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://ucu-planetario.loca.lt/planets/${id}`, {
          headers: { 'bypass-tunnel-reminder': 'true' },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch planet');
        }
        const data = await response.json();
        setPlanet(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPlanet();
  }, [id]);

  return { planet, loading, error };
};
