import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
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

                        {/* //removed mx-auto from below*/}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item-all">
                                <Link className="nav-link" to="/">All</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/women">Women's</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/men">Men's</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/jewelery">Jewellery</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/electronics">Electronics</Link>
                            </li>
                        </ul>

                        <div className="buttons">
                            <Link to="/wishlist" className="btn btn-outline-dark m-2 align-center">
                                <FontAwesomeIcon icon={faHeart} /> Wishlist
                            </Link>


                            <li className="nav-item dropdown">
                                <a className="btn outline-dark dropdown-toggle mt-2" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser} /> Login <span fs-1px>or Sign Up</span>
                                </a>
                                <ul className="dropdown-menu border-color-primary" aria-labelledby="navbarDropdown" id='submenu' data-bs-parent='#parentM'>
                                    <li><a className="dropdown-item" href="/login">Login</a></li>
                                    <li><a className="dropdown-item" href="/register">Sign Up</a></li>
                                </ul>
                            </li>


                            <Link to="/cart" className="btn btn-outline-dark m-2 align-center">
                                <FontAwesomeIcon icon={faCartShopping} /> <span className="badge badge-light"></span>
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