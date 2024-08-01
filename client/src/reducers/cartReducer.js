
export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CART':
            return { ...state, cart: action.payload };
        case 'ADD_ITEM':
            return {
                ...state,
                cart: [...state.cart.filter(x => x._id !== action.payload._id), action.payload]
            };
            case 'EDIT_ITEM':
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item._id === action.payload._id
                            ? { ...item, quantity: action.payload.quantity }
                            : item
                    )
                };
              
        case 'DELETE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload._id)
            };
         case 'CLEAR_CART':
                return { ...state, cart: [] }; 

            default:
                throw new Error(`Unhandled action type: ${action.type}`);
    }
};
