import { CHECKOUT_BOOKING } from "../type";

const initialState = {
    dataCheckout: []
};

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_BOOKING:
            return {...state, dataCheckout: [...state.dataCheckout, action.payload]};
        default:
            return state;
    }
}

export default checkoutReducer;