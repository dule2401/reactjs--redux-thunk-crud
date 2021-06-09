import React, { useState } from 'react';
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

    const handleSave = () => {
        // console.log("products", products);
    }

    const handleChangeInput = (e) => {
        const product = e.target.value;
        setProducts(product)
    }

    // console.log("products", products);
    return (
        <div className={`p-container ${isSelected ? "selected" : ""}`}>
            <h3>Product Popup</h3>
            <br />
            <input
                value={products.id}
                onChange={(e) => handleChangeInput(e)}
                className="form-control"
                type="text"
                placeholder="id input" />
            <br />
            <input
                value={products.CreateName}
                onChange={(e) => handleChangeInput(e)}
                className="form-control"
                type="text"
                placeholder="CreateName input" />
            <br />
            <input
                value={products.ProductName}
                onChange={(e) => handleChangeInput(e)}
                className="form-control"
                type="text"
                placeholder="ProductName input" />
            <br />
            <input
                value={products.CreateDate}
                onChange={(e) => handleChangeInput(e)}
                className="form-control"
                type="text"
                placeholder="CreateDate input" />
            <br />
            <input
                value={products.EndDate}
                onChange={(e) => handleChangeInput(e)}
                className="form-control"
                type="text"
                placeholder="EndDate input" />
            <br />
            <input
                value={products.Price}
                onChange={(e) => handleChangeInput(e)}
                className="form-control"
                type="text"
                placeholder="Price input" />
            <br />
            <input
                value={products.NumberPhone}
                onChange={(e) => handleChangeInput(e)}
                className="form-control"
                type="text"
                placeholder="NumberPhone input" />
            <br />
            <button onClick={() => setIsSelected(!isSelected)}>Cancel</button> {""}
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default Popup;