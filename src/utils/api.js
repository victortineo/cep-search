import fetchJsonp from 'fetch-jsonp';

const url = (cep) => `https://viacep.com.br/ws/${cep}/json/`

export const getCep = async (cep) => {
  const response = await fetchJsonp(url(cep), {
    jsonpCallback: 'callback',
    jsonpCallbackFunction: 'myfunc'
  });
  return await response.json();
} 