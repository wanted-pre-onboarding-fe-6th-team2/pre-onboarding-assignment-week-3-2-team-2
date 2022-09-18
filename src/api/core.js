import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

class BaseApiService {
  constructor(path) {
    this.http = axios.create({
      baseURL: `${BASE_URL}/${path ?? ''}`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  static handleResponse = response => {
    return response;
  };

  static handleError(error) {
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw error;
        } else if (error.request) {
          throw new Error(error);
        }
      } else {
        throw new Error(error.message);
      }
    }
    throw new Error(error);
  }
}

export default BaseApiService;
