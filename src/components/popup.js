import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/product/productAction';
import './popup.css';

function Popup({ isSelected, setIsSelected, setTime, productItem }) {

    const [products, setProducts] = useState({
        id: "",
        CreateName: "",
        ProductName: "",
        CreateDate: "",
        EndDate: "",
        Price: "",
        NumberPhone: "",
    })
    useEffect(() => {
        setProducts({ ...products, ...productItem })
    }, [productItem])

    console.log("productItem--------2", products);
    const dispatch = useDispatch();
    const handleSave = () => {
        dispatch(createProduct(products));
        setTime(new Date());
        setIsSelected(false)

        const emty = {};
        setProducts(
            {...products, ...emty}
        )
    }

    const handleCancel = () => {
        
        const emty = {};
        setProducts(
            {...products, ...emty}
        )
        console.log(products);
        setIsSelected(false);
    }

    const handleChangeInput = (e) => {
        setProducts(
            { ...products, [e.target.name]: e.target.value }
        )
    }
    console.log("productItem ---------", productItem);
    return (
        <div className={`p-container ${isSelected ? "selected" : ""}`}>
            <h3>Product Popup</h3>
            <br />
            <form>
                <input
                    value={products.id}
                    name="id"
                    onChange={(e) => handleChangeInput(e)}
                    className="form-control"
                    type="text"
                    placeholder="id input" />
                <br />
                <input
                    value={products.CreateName}
                    name="CreateName"
                    onChange={(e) => handleChangeInput(e)}
                    className="form-control"
                    type="text"
                    placeholder="CreateName input" />
                <br />
                <input
                    value={products.ProductName}
                    name="ProductName"
                    onChange={(e) => handleChangeInput(e)}
                    className="form-control"
                    type="text"
                    placeholder="ProductName input" />
                <br />
                <input
                    value={products.CreateDate}
                    name="CreateDate"
                    onChange={(e) => handleChangeInput(e)}
                    className="form-control"
                    type="text"
                    placeholder="CreateDate input" />
                <br />
                <input
                    value={products.EndDate}
                    name="EndDate"
                    onChange={(e) => handleChangeInput(e)}
                    className="form-control"
                    type="text"
                    placeholder="EndDate input" />
                <br />
                <input
                    value={products.Price}
                    name="Price"
                    onChange={(e) => handleChangeInput(e)}
                    className="form-control"
                    type="text"
                    placeholder="Price input" />
                <br />
                <input
                    value={products.NumberPhone}
                    name="NumberPhone"
                    onChange={(e) => handleChangeInput(e)}
                    className="form-control"
                    type="text"
                    placeholder="NumberPhone input" />
                <br />
            </form>
            <button onClick={handleCancel}>Cancel</button> {""}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default Popup;