import { useState } from 'react';

export const useAddPlanet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addPlanet = async (newPlanet, callback) => {
    setLoading(true);
    try {
      const response = await fetch('https://ucu-planetario.loca.lt/planets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'bypass-tunnel-reminder': 'true',
        },
        body: JSON.stringify(newPlanet),
      });
      if (!response.ok) {
        throw new Error('Failed to add planet');
      }
      callback(); 
      return newPlanet;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { addPlanet, loading, error };
};
