import axios from 'axios';
import { ENVIRONMENTS } from '~/utils/getEnv';

export const NinininiAxios = axios.create({
  baseURL: ENVIRONMENTS.baseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});
