import * as request from '../lib/request';

const envUrl = import.meta.env.VITE_API_URL;
const baseUrl = `${envUrl}/data/comments`;

export const getAll = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    });

    return request.get(`${baseUrl}?${query}`);
};

export const create = async (productId, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        text,
    });

    return newComment;
};
