import React from 'react';
import ResponseField from '../ResponseFields/ResponseField';
import Loading from '../Shared/Loading'
import ErrorMessage from '../Shared/ErrorMessage'
import WaitingForQuery from '../Shared/WaitingForQuery'

const RucResponse = ({ responseData, error, loading }) => {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!responseData) return <WaitingForQuery />;

  return (
    <div className="bg-gray-950/50 lg:shadow-2xl lg:shadow-black/60 rounded-3xl p-10 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <ResponseField label="RUC" value={responseData.ruc} />
      <ResponseField label="Razón Social" value={responseData.nombre_o_razon_social} />
      <ResponseField label="Dirección" value={responseData.direccion} />
      <ResponseField label="Dirección completa" value={responseData.direccion_completa} />
      <ResponseField label="Estado" value={responseData.estado} />
      <ResponseField label="Condición" value={responseData.condicion} />
      <ResponseField label="Departamento" value={responseData.departamento} />
      <ResponseField label="Provincia" value={responseData.provincia} />
      <ResponseField label="Distrito" value={responseData.distrito} />
      <ResponseField label="Ubigeo Sunat" value={responseData.ubigeo_sunat} />
    </div>
  );
};

export default RucResponse;
