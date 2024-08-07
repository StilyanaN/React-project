import * as request from '../lib/request';

const baseUrl = import.meta.env.VITE_API_URL;


export const getOrdersByUserId = async (userId) => {
    try {
        return await request.get(`${baseUrl}/data/orders/?_ownerId=${userId}`);
    } catch (error) {
        console.error('Failed to fetch orders for user:', error);
        throw new Error('Failed to fetch orders');
    }
};


export const createOrder = async (orderData) => {
    try {
        return await request.post(`${baseUrl}/data/orders`, orderData);
    } catch (error) {
        console.error('Failed to create order:', error);
        throw new Error('Failed to create order');
    }
};
