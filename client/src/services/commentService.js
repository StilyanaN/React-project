import * as request from '../lib/request';

const baseUrl = import.meta.env.VITE_API_URL;

export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    });

    return request.get(`${baseUrl}/data/comments/?${query}`);
};

export const create = async (productId, text) => {
    const newComment = await request.post(`${baseUrl}/data/comments`, {
        productId,
        text,
    });

    return newComment;
};
