import { useState } from 'react';

export const useDeletePlanet = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deletePlanet = async (id, callback) => {
      setLoading(true);
      try {
        const response = await fetch(`https://ucu-planetario.loca.lt/planets/${id}`, {
          method: 'DELETE',
          headers: { 'bypass-tunnel-reminder': 'true' },
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error('Failed to delete planet');
        }

        callback(); 
        return data;
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    return { deletePlanet, loading, error };
  };
  