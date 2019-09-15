import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://test.api.4fleet.com.br/',
});

export const track = axios.create({
  baseURL: 'https://tracker.4fleet.com.br',
  headers: { '4Fleet-Key': 'X61uCHatrZ58splo4UEDLSvMyYibooRQIbSQZW4oYN8=' },
});
