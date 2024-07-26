// services/productService.js
import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/flavors';

export const getAll = async () => {
    return await request.get(baseUrl);
};

export const getOne = async (flavorId) => {
  const result= await request.get(`${baseUrl}/${flavorId}`);
  return result;
};

