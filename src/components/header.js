import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";

Header.propTypes = {

};

function Header(props) {
    const [isActive, setIsActive] = useState("");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              <img src={logo} width="60px" alt="Home page"></img>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${isActive === "home"? "active" : ""}`} aria-current="page" to="/home" onClick={() => setIsActive("home")}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive === "product"? "active" : ""}`}  onClick={() => setIsActive("product")} to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive === "customer"? "active" : ""}`}  onClick={() => setIsActive("customer")} to="/customer">Customer</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive === "contact"? "active" : ""}`}  onClick={() => setIsActive("contact")} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header;