import api from '../../api/api';

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const CREAT_PRODUCT = "CREAT_PRODUCT";

export const getListProduct = () => async (dispatch) => {
    const response = await api.get("/products");
    dispatch({
        type: GET_LIST_PRODUCT,
        payload: response.data,
    });
};

export const createProduct = (product) => async (dispatch) => {
    console.log("--------product-------",product);
    const response = await api.post('/products', product);
    dispatch({
        type: CREAT_PRODUCT,
        payload: response.data,
    });
}