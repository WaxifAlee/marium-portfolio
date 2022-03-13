import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = (props) => {

    const pages = ["Home", "About", "Health", "Lifestyle", "Contact"]
    const socialLinks = [{
        icon: "fa-facebook",
        url: "#"
        },
        {
        icon: "fa-instagram",
        url: "#",
        },
        {icon: "fa-linkedin",
        url: "#",
        },
        {
        icon: "fa-github",
        url: "#",
        }
    ]

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
                                <li><a target="_blank" href={link.url}><i className={`fab fa-lg ${link.icon}`}></i></a></li>
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