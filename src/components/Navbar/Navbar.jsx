import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = (props) => {

    const pages = ["Home", "About", "Health", "Lifestyle", "Contact"]
    const socialLinks = ["fa-facebook", "fa-instagram", "fa-linkedin", "fa-github"]

    return (
        <nav>

            <div className="nav-section-top">

            

                <div className="search-bar-container">
                    <button className='btn-search' type='submit'>
                        <i className="fas fa-search"></i>
                    </button>
                    <input type="text" placeholder='Search...' />
                </div>

                <div className="social-links">
                    <ul>

                        {
                            socialLinks.map( link => ( 
                                <li><a href="#"><i className={`fab fa-lg ${link}`}></i></a></li>
                             ) )
                        }

                    </ul>
                </div>

            </div>

            <div className="nav-section-mid">

                <div className="center logo-container">
                        <span><Link style={{textDecoration: "none", color: "var(--primary-black)"}} to={"home"}>Marium Ilyas</Link></span>
                </div>

            </div>


            <div className="center nav-section-bottom">
                <div className="pages-links">

                    <ul>
                        {pages.map((item) => (
                            <li><Link to={`/${item}`} >{item}</Link></li>
                        ))}
                    </ul>

                </div>
            </div>

        </nav >
    )
}

export default Navbar;