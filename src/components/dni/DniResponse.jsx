import React from 'react';
import ResponseField from '../../components/ResponseFields/ResponseField'
import Loading from '../Shared/Loading'
import ErrorMessage from '../Shared/ErrorMessage'
import WaitingForQuery from '../Shared/WaitingForQuery'


const DniResponse = ({ responseData, error, loading }) => {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!responseData) return <WaitingForQuery />;
  return (
    <div className="bg-gray-950/50 lg:shadow-2xl lg:shadow-black rounded-3xl p-10 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <ResponseField label="DNI" value={responseData.numero} />
      <ResponseField label="Nombre completo" value={responseData.nombre_completo} />
      <ResponseField label="Nombres" value={responseData.nombres} />
      <ResponseField label="Apellido paterno" value={responseData.apellido_paterno} />
      <ResponseField label="Apellido materno" value={responseData.apellido_materno} />
      <ResponseField label="Codigo Verificacion" value={responseData.codigo_verificacion} />
    </div>
  );
};

export default DniResponse;
