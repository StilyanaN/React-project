import * as request from '../lib/request';


const envUrl = import.meta.env.VITE_API_URL;
const baseUrl = `${envUrl}/data/flavors`


export const getAll = async () => {
    return await request.get(baseUrl);
};

export const getOne = async (flavorId) => {
  const result= await request.get(`${baseUrl}/${flavorId}`);
  return result;
};

export const getSorted = async (page = 1, pageSize = 6) => {
 
  const skip = (page - 1) * pageSize;
  const query = `sortBy=_createdOn desc&$skip=${skip}&$limit=${pageSize}`;
  
  return await request.get(`${baseUrl}/?${query}`);
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