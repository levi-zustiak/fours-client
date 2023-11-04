import { useAuth } from '@contexts/AuthContext';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  withCredentials: true,
});

export function useRequest() {
  const { logout } = useAuth();

  async function get(url: string) {
    try {
      const res = await api.get(url, {
        validateStatus: (status) => {
          switch (status) {
            case 401:
              logout();
              return false;
            default:
              true;
          }
          return true;
        },
      });
      console.log('res', res);

      return handleResponse(res);
    } catch (e) {
      console.log('Error', e);
    }
  }

  async function post<B>(url: string, body: B) {
    const res = await api.post(url, body);

    return handleResponse(res);
  }

  const handleResponse = (res) => {
    console.debug('handle', res);
  };

  return { get, post };
}
