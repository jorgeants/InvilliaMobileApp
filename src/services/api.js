import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place',
});
