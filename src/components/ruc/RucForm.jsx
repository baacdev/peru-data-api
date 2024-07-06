import React, { useState } from 'react';

const RucForm = ({ onSubmit }) => {
  const [ruc, setRuc] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(ruc);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 11) { // Solo permitir números y máximo 11 dígitos
      setRuc(value);
    }
  };

  return (
    <form className="bg-gray-950/50 p-10 rounded-3xl lg:shadow-lg lg:shadow-black" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="">
          <h2 className="text-gray-400 text-2xl text-center font-black mb-10 block leading-7">CONSULTAR RUC</h2>
          <p className="mt-1 text-sm font-bold leading-6 text-gray-400">* Ingrese el número de RUC que quiere consultar.</p>
          <div className="sm:col-span-4">
            <label htmlFor="ruc" className="text-gray-400 text-base font-black block leading-6">
              RUC:
            </label>
            <div className="mt-2">
              <input
                id="ruc"
                name="ruc"
                type="text"
                autoComplete="ruc"
                maxLength="11"
                className="bg-gray-600 font-bold block w-full rounded-md border-none px-3.5 py-2 text-gray-300 placeholder:text-gray-400 focus:outline-none sm:leading-6 custom-input"
                value={ruc}
                onChange={handleChange}
              />
              <p className="mt-1 text-sm font-bold leading-6 text-gray-400">Introduzca un mínimo y un máximo de 11 dígitos.</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${ruc.length === 11 ? 'bg-indigo-700 hover:bg-indigo-600 focus-visible:outline-indigo-700' : 'bg-gray-500 cursor-not-allowed'}`}
              disabled={ruc.length !== 11}
            >
              Consultar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RucForm;
