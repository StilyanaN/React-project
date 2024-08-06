/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import authContext from "./authContext";
import * as cartService from '../services/cartService';
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const { userId } = useContext(authContext);

    const [state, dispatch] = useReducer(cartReducer, { cart: [] });

    useEffect(() => {
        if (userId) {
            cartService.getProductsInCart(userId)
                .then(result => {
                    dispatch({ type: 'SET_CART', payload: result });
                });
        }
    }, [userId]);

    const onCartSubmit = useCallback(async (data) => {
        try {
            const newCartItem = await cartService.addProductInCart(data, userId);
            dispatch({ type: 'ADD_ITEM', payload: newCartItem });
            navigate('/cart');
            toast.success('Item added to cart successfully!');
        } catch (error) {
            toast.error(`Failed to add item to cart: ${error.message}`);
        }
    }, [navigate, userId]);

    const onCartEdit = useCallback(async (cartItemId, quantity) => {
        try {
            await cartService.editCartItem(cartItemId, quantity);
            dispatch({ type: 'EDIT_ITEM', payload: { _id: cartItemId, quantity } });
            navigate('/cart');
            toast.success('Cart item updated successfully!');
        } catch (error) {
            toast.error(`Failed to edit cart item: ${error.message}`);
        }
    }, [navigate]);

    const onCartDelete = useCallback((cartItemId) => {
        confirmAlert({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        try {
                            await cartService.removeCartItem(cartItemId);
                            dispatch({ type: 'DELETE_ITEM', payload: { _id: cartItemId } });
                            toast.success('Cart item deleted successfully!');
                        } catch (error) {
                            toast.error(`Failed to delete cart item: ${error.message}`);
                        }
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        toast.info('Cart item deletion cancelled.');
                    }
                }
            ]
        });
    }, []);

    const clearCart = useCallback(async () => {
        try {
            await Promise.all(state.cart.map(item => cartService.removeCartItem(item._id)));
            dispatch({ type: 'CLEAR_CART' });
        
        } catch (error) {
            console.log(`Failed to clear cart: ${error.message}`);
        }
    }, [state.cart]);

    const values = {
        cart: state.cart,
        onCartSubmit,
        onCartEdit,
        onCartDelete,
        clearCart
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};
