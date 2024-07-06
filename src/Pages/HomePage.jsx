import React from 'react'

function HomePage() {
  return (
    <div className="bg-gray-950/90 min-h-[92vh]">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl  lg:px-8">
        <div>
          <h2 className="font-mono text-3xl text-center font-bold tracking-tight text-indigo-400 uppercase sm:text-4xl">Especificaciones técnicas</h2>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="bg-gray-950 p-10 rounded-3xl">
              <dt className="font-mono text-xl font-bold text-center text-indigo-400 sm:text-3xl">CONSULTA DNI</dt>
              <dd className="font-mono mt-4 text-base text-indigo-200 sm:text-xl">Servicio de consulta DNI (nombres y apellidos) en tiempo real desde el padrón reducido SUNAT y otras fuentes públicas.</dd>
              <ul className="font-mono text-sm pl-8 text-indigo-100 mt-7 list-disc sm:text-lg">
                <li>Este servicio no se conecta con RENIEC</li>
              </ul>
              <ul className="font-mono text-sm pl-8 text-indigo-100 mt-5 list-disc sm:text-lg">
                <li>El origen de datos depende del padrón reducido SUNAT y otras fuentes públicas.</li>
              </ul>
              <ul className="font-mono text-sm pl-8 text-indigo-100 mt-5 list-disc sm:text-lg">
                <li>El padrón reducido SUNAT no devuelve datos de menores de edad, dirección, fecha nacimiento, sexo.</li>
              </ul>
              <ul className="font-mono text-sm pl-8 text-indigo-100 mt-5 list-disc sm:text-lg">
                <li>En algunos casos no se obtendrá resultado de la consulta debido a la información de las fuentes públicas, esto no debe considerarse como falla o error del servicio.</li>
              </ul>
            </div>
            <div className="bg-gray-950 p-10 rounded-3xl">
              <dt className="font-mono text-xl font-bold text-center text-indigo-400 sm:text-3xl">CONSULTA RUC</dt>
              <dd className="font-mono mt-4 text-base text-indigo-200 sm:text-xl">Servicio de validación de datos de empresas desde nuestros servidores con información oficial de SUNAT.</dd>
              <ul className="font-mono text-sm pl-8 text-indigo-100 mt-7 list-disc sm:text-lg">
                <li>Los datos se obtienen del padrón reducido de SUNAT.</li>
              </ul>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HomePage