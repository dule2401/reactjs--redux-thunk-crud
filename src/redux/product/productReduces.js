import { GET_LIST_PRODUCT, CREAT_PRODUCT } from "./productAction";

const initialState = []

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PRODUCT:
            return action.payload;
        case CREAT_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}

export default ProductReducer;