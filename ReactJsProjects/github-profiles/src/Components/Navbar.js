import React from 'react';
import {Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <p className="navbar-brand">Github Website</p>
            <div className="container-small">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <Link className="nav-link" activeClass="active" to="main_card" spy={true} smooth={true} offset={50} duration={500}> User Info </Link>
                        <Link className="nav-link" activeClass="active" to="repository" spy={true} smooth={true} offset={50} duration={500}> User Repository </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar