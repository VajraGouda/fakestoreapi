import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm" >
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4" to="/"><span className="text-primary">SHOP</span>LANE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">All</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/women">Women's</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/men">Men's</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/jewelery">Jewelery</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/electronics">Electronics</Link>
                            </li>

                        </ul>
                        <div className="buttons">

                            <Link to="/wishlist" className="btn btn-outline-dark me-2">
                                <FontAwesomeIcon icon={faHeart} /> Wishlist
                            </Link>

                            <Link to="/login" className="btn btn-outline-dark me-2">
                                <FontAwesomeIcon icon={faRightToBracket} /> Login
                            </Link>

                            <Link to="/register" className="btn btn-outline-dark me-2">
                                <FontAwesomeIcon icon={faUserPlus} /> Register
                            </Link>

                            <Link to="/cart" className="btn btn-primary me-2">
                                <FontAwesomeIcon icon={faCartShopping} /> Cart <span className="badge badge-light"></span>
                            </Link>


                        </div>

                    </div>
                </div>
            </nav>
            {/* <Products/> */}

        </div>

    );

}

export default Navbar;