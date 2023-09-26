import { useAuth } from '@contexts/AuthContext';
import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:3001/',
  timeout: 1000,
  withCredentials: true,
});

function useRequest() {
  const { logout } = useAuth();

  const request = (method) => (url, body) => {
    console.log(method, url, body);
  };
}
