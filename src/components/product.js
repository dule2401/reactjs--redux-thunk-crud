import React, {  useEffect, useState } from 'react';
import { connect,  useDispatch,  useSelector } from 'react-redux';
import {getListProduct}  from './../redux/product/productAction'
import Popup from './popup';

import './product.css';

function Product() {
    const [isSelected , setIsSelected ] = useState(false);
    const data = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListProduct())
    },[]);
    
    const handleUpdate = () => {
        setIsSelected(!isSelected);
    }
    const handleDelete = () => {
        alert("cc2")
    }
    const handleAdd = () => {
        setIsSelected(!isSelected);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="nav-table" style={{overflowY:"hidden"}}>
                    <h3>Product List</h3>
                    <button onClick={handleAdd}>add</button>
                </div>
                <Popup isSelected={isSelected} setIsSelected={setIsSelected}/>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">CreateName</th>
                            <th scope="col">ProductName</th>
                            <th scope="col">CreateDate</th>
                            <th scope="col">EndDate</th>
                            <th scope="col">Price</th>
                            <th scope="col">NumberPhone</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) &&
                            data
                                .map((product, index) =>
                                    <tr key={index}>
                                        <th scope="row">{product.id}</th>
                                        <td>{product.CreateName}</td>
                                        <td>{product.ProductName}</td>
                                        <td>{product.CreateDate}</td>
                                        <td>{product.EndDate}</td>
                                        <td>{product.Price}</td>
                                        <td>{product.NumberPhone}</td>
                                        <td><button onClick={handleUpdate}>edit</button>{"   "}
                                            <button onClick={handleDelete}>delete</button></td>
                                    </tr>
                                )}
                    </tbody>
                </table>
            </div>
           
        </>
    );
}

export default (Product);