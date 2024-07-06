import React, { useState } from 'react';
import RucForm from '../../components/ruc/RucForm'
import RucResponse from '../../components/ruc/RucResponse'
import { fetchRucData } from '../../api/api'

function RucPage() {
  const [rucData, setRucData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRucSubmit = async (ruc) => {
    setLoading(true);
    try {
      const data = await fetchRucData(ruc);
      setRucData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setRucData(null);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-950/90 grid lg:grid-cols-2 min-h-[92vh] place-items-center py-5 px-5 lg:px-8">
      <RucForm onSubmit={handleRucSubmit} />
      <RucResponse responseData={rucData} error={error} loading={loading} />
    </div>
  );
}

export default RucPage