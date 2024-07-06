import axios from 'axios';

const API_TOKEN = '4366c591fe154f4b86c048f3170168defc2234fd8d5e391ea19262dd4751a37a';
const BASE_URL = 'https://apiperu.dev/api';

const fetchData = async (endpoint) => {
  const apiUrl = `${BASE_URL}${endpoint}?api_token=${API_TOKEN}`;

  try {
    const response = await axios.get(apiUrl, {
      httpsAgent: {
        rejectUnauthorized: false,
      },
    });

    const { data } = response;
    if (data.success) {
      return data.data;
    } else {
      throw new Error('No se encontraron registros.');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

export const fetchDniData = async (dni) => {
  return await fetchData(`/dni/${dni}`);
};

export const fetchRucData = async (ruc) => {
  return await fetchData(`/ruc/${ruc}`);
};
