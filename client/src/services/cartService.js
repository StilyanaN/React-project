import * as request from '../lib/request';

const baseUrl = `${import.meta.env.VITE_API_URL}/data/cart`


export const getProductsInCart = async (userId) =>  {
    const result = await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    return Object.values(result);
};

export const addProductInCart = async (cartData, userId) => {
    try {
        const currentCart = await getProductsInCart(userId);
    
        const existingItem = currentCart.find(item => 
            item.flavourId === cartData.flavourId && item.name === cartData.name
        );
        
        let result;
        if (existingItem) {
            const updatedData = {
                ...existingItem,
                quantity: existingItem.quantity + cartData.quantity
            };
            result = await request.put(`${baseUrl}/${existingItem._id}`, updatedData);
        } else {

            result = await request.post(baseUrl, cartData);
        }

        return result;
    } catch (error) {
        console.error("Error adding product to cart:", error);
        throw error;
    }
};


export const removeCartItem = (cartItemId) => request.remove(`${baseUrl}/${cartItemId}`);

export const editCartItem = async (cartItemId, quantity) => {
    const result = await request.put(`${baseUrl}/${cartItemId}`, {quantity});

    return result;
}





