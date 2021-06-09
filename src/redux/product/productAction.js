import axios from 'axios';
import api from '../../api/api';

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";

export const getListProduct = () => async (dispatch) => {
    const response = await api.get("/products");
     dispatch({
        type: GET_LIST_PRODUCT,
        payload: response.data,
    });
};
