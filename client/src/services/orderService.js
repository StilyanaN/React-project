
import * as request from '../lib/request';

const envUrl = import.meta.env.VITE_API_URL;
const baseUrl = `${envUrl}/data/orders`


export const getOrdersByUserId = async (userId) => {
    try {
        return await request.get(`${baseUrl}?userId=${userId}`);
    } catch (error) {
        console.error('Failed to fetch orders for user:', error);
        throw new Error('Failed to fetch orders');
    }
};

export const getOrderById = async (orderId) => {
    try {
        return await request.get(`${baseUrl}/${orderId}`);
    } catch (error) {
        console.error(`Failed to fetch order ${orderId}:`, error);
        throw new Error('Failed to fetch order');
    }
};


export const createOrder = async (orderData) => {
    try {
        return await request.post(baseUrl, orderData);
    } catch (error) {
        console.error('Failed to create order:', error);
        throw new Error('Failed to create order');
    }
};

