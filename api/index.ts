import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { photostockAppToken, photostockUri } from '../utils';
import { IPexelsResponse } from '../interfaces';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

const photostockInstance: AxiosInstance = axios.create({
  baseURL: photostockUri
});

const additionalUrls: Record<string, string> = {
  search: '/search'
};

const addParams = (
  url: string,
  params: Record<string, string | number> = {}
) => {
  if (Object.keys(params).length) {
    return `${url}?${Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&')}`;
  } else {
    return url;
  }
};

const makeRequest = (method: RequestMethod, url: string, ...params: any) => {
  switch (method) {
    case 'get':
      return photostockInstance.get(`${url}`, ...params);
    case 'post':
      return photostockInstance.post(`${url}`, ...params);
    case 'put':
      return photostockInstance.put(`${url}`, ...params);
    case 'delete':
      return photostockInstance.delete(`${url}`, ...params);
  }
};

const request = (method: RequestMethod, url: string) => {
  return (...params: any) => {
    return makeRequest(method, url, ...params);
  };
};

photostockInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (photostockAppToken) {
    config.headers && (config.headers.Authorization = photostockAppToken);

    return config;
  }

  return config;
});

photostockInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (reject: any) => {
    console.log(reject);

    return reject;
  }
);

export const getPhoto = (
  query: string
): Promise<AxiosResponse<IPexelsResponse, void>> =>
  request(
    'get',
    addParams(photostockUri + additionalUrls.search, {
      query,
      per_page: 80
    })
  )();
