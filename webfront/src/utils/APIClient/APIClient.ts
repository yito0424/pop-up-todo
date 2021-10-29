import IAPIClient from './IAPIClient';
import {
  CODE_BAD_REQUEST,
  CODE_INTERNAL_SERVER_ERROR,
} from '../constants/errorCodes';
import ErrorResponse from '../../repository/response/ErrorResponse';

/* eslint-disable class-methods-use-this */
class APIClient implements IAPIClient {
  async post<Value, Response>(value: Value): Promise<Response | ErrorResponse> {
    const url: string = process.env.REACT_APP_API_ENDPOINT ?? '';
    if (!url) {
      console.error('api endpoint is not set to env');
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });
    if (!response.ok) {
      if (
        response.status === CODE_BAD_REQUEST ||
        response.status === CODE_INTERNAL_SERVER_ERROR
      ) {
        /* eslint-disable @typescript-eslint/no-unsafe-assignment */
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        return {
          message: (await response.json())?.message ?? 'response error',
        };
        /* eslint-enable */
      }

      return { message: response.statusText };
    }
    const responseJson = (await response.json()) as Response;

    return responseJson;
  }
}

export default APIClient;
