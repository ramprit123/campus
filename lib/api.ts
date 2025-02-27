import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Define generic types for request data and response data
interface ApiRequest<T> {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: T;
}

interface ApiResponse<U> {
  data: U;
}

// Define a generic type for error responses
interface ApiErrorResponse {
  data: any;
  status: number;
  headers: any;
}

export const apiCall = async <T, U>(apiRequest: ApiRequest<T>): Promise<U> => {
  try {
    const response: AxiosResponse<U> = await axios({
      method: apiRequest.method,
      url: apiRequest.url,
      data: apiRequest.data,
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;

      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const errorResponse: ApiErrorResponse = {
          data: axiosError.response.data,
          status: axiosError.response.status,
          headers: axiosError.response.headers,
        };
        console.error(errorResponse);
        throw errorResponse; // Rethrow the error to support TanStack Query's error handling
      } else if (axiosError.request) {
        // The request was made but no response was received
        console.error(axiosError.request);
        throw axiosError.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", axiosError.message);
        throw axiosError;
      }
    } else {
      // Non-Axios error
      console.error("Error", error.message);
      throw error;
    }
  }
};
