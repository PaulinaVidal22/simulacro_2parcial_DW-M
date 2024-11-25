import { useState } from 'react';

export const useEditPlanet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editPlanet = async (id, updatedPlanet, callback) => {
    setLoading(true);
    try {
      const response = await fetch(`https://ucu-planetario.loca.lt/planets/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'bypass-tunnel-reminder': 'true',
        },
        body: JSON.stringify(updatedPlanet),
      });
      if (!response.ok) {
        throw new Error('Failed to edit planet');
      }
      
      callback(); 
      return updatedPlanet;

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { editPlanet, loading, error };
};
