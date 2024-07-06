import React, { useState } from 'react';

const DniForm = ({ onSubmit }) => {
  const [dni, setDni] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(dni);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 8) { // Solo permitir números y máximo 8 dígitos
      setDni(value);
    }
  };

  return (
    <form className="bg-gray-950/50 p-10 rounded-3xl lg:shadow-lg lg:shadow-black" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="">
          <h2 className="text-gray-400 text-2xl text-center font-black mb-10 block leading-7">CONSULTAR DNI</h2>
          <p className="mt-1 text-sm font-bold leading-6 text-gray-400">* Ingrese el número de DNI que quiere consultar.</p>
          <div className="sm:col-span-4">
            <label htmlFor="dni" className="text-gray-400 text-base font-black block leading-6">
              DNI:
            </label>
            <div className="mt-2">
              <input
                id="dni"
                name="dni"
                type="text"
                autoComplete="dni"
                maxLength="8"
                className="bg-gray-600 font-bold block w-full rounded-md border-none px-3.5 py-2 text-gray-300 placeholder:text-gray-400 focus:outline-none sm:leading-6 custom-input"
                value={dni}
                onChange={handleChange}
              />
              <p className="mt-1 text-sm font-bold leading-6 text-gray-400">Introduzca un mínimo y un máximo de 8 dígitos.</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${dni.length === 8 ? 'bg-indigo-700 hover:bg-indigo-600 focus-visible:outline-indigo-700' : 'bg-gray-500 cursor-not-allowed'}`}
              disabled={dni.length !== 8}
            >
              Consultar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DniForm;
