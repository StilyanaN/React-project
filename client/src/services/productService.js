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

export const create = async (flavorData) => {
  const result = await request.post(baseUrl, flavorData);

  return result;
};

export const edit = async (flavorId, flavorData) => {
  const result = await request.put(`${baseUrl}/${flavorId}`, flavorData);

  return result;
};

export const remove = async (flavorId) => request.remove(`${baseUrl}/${flavorId}`);