import api from '../../api/api';

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const CREAT_PRODUCT = "CREAT_PRODUCT";
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const getListProduct = () => async (dispatch) => {
    const response = await api.get("/products");
    dispatch({
        type: GET_LIST_PRODUCT,
        payload: response.data,
    });
};

export const deleteProduct = (id) => async (dispatch) => {
    console.log("--------id-------",id);
    const response = await api.delete(`/products/${id}`);
    dispatch({
        type: DELETE_PRODUCT,
        payload: response.data,
    });
}

export const createProduct = (product) => async (dispatch) => {
    console.log("--------product-------",product);
    const response = await api.post('/products', product);
    dispatch({
        type: CREAT_PRODUCT,
        payload: response.data,
    });
}