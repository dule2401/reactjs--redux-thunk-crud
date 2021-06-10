import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/product/productAction';
import './popup.css';

function Popup({ isSelected, setIsSelected }) {

    const [products, setProducts] = useState({
        id: "",
        CreateName: "",
        ProductName: "",
        CreateDate: "",
        EndDate: "",
        Price: "",
        NumberPhone: "",
    })

    const dispatch = useDispatch();
    const handleSave = () => {
        dispatch(createProduct(products));
        
    }

    const handleChangeInput = (e) => {
        setProducts(
            {...products, [e.target.name]: e.target.value }
        )
    }
    console.log("products", products);
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
            <button onClick={() => setIsSelected(!isSelected)}>Cancel</button> {""}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default Popup;