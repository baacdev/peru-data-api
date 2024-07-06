import React from 'react';

const ResponseField = ({ label, value }) => (
  <div className="sm:col-span-3">
    <label className="text-indigo-400 text-base font-black block leading-6">
      {label}:
    </label>
    <div className="mt-2">
      <a className="text-indigo-200 text-sm font-bold block w-full p-1">
        {value}
      </a>
    </div>
  </div>
);

export default ResponseField;