import React, { useState } from 'react';
import { fetchDniData } from '../../api/api';
import DniForm from '../../components/dni/DniForm';
import DniResponse from '../../components/dni/DniResponse';

function DniPage() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (dni) => {
    setLoading(true);
    setError(null);
    setResponseData(null);
    try {
      const data = await fetchDniData(dni);
      setResponseData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-950/90 grid lg:grid-cols-2 min-h-[92vh] place-items-center py-5 px-5 lg:px-8">
      <DniForm onSubmit={handleSubmit} />
      <DniResponse responseData={responseData} error={error} loading={loading} />
    </div>
  )
}

export default DniPage