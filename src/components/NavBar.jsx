import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">Logo</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/medicare">Medicare</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/group">Group Benefits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/faq">FAQ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/testimonials">Testimonials</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/contact-us">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-warning">425-999-9999</button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
        );
};

export default Navbar;
