import * as request from '../lib/request';


const baseUrl = import.meta.env.VITE_API_URL;



export const getAll = async () => {
    return await request.get(`${baseUrl}/data/flavors`);
};

export const getOne = async (flavorId) => {
  const result= await request.get(`${baseUrl}/data/flavors/${flavorId}`);
  return result;
};

export const getSorted = async (page = 1, pageSize = 6) => {
 
  const skip = (page - 1) * pageSize;
  const query = `sortBy=_createdOn desc&$skip=${skip}&$limit=${pageSize}`;
  
  return await request.get(`${baseUrl}/data/flavors/?${query}`);
};

export const create = async (flavorData) => {
  const result = await request.post(`${baseUrl}/data/flavors`, flavorData);

  return result;
};

export const edit = async (flavorId, flavorData) => {
  const result = await request.put(`${baseUrl}/data/flavors/${flavorId}`, flavorData);

  return result;
};

export const remove = async (flavorId) => request.remove(`${baseUrl}/data/flavors/${flavorId}`);