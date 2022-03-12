import React from 'react'
import "./Navbar.css"

const Navbar = () => {
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
                        <li><a href="#"><i className="fab fa-lg fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-lg fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-lg fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fab fa-lg fa-github"></i></a></li>
                    </ul>
                </div>

            </div>

            <div className="nav-section-mid">

                <div className="center logo-container">
                    <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
                        <span>Marium Ilyas</span>
                    </a>
                </div>

            </div>


            <div className="center nav-section-bottom">
                <div className="pages-links">

                    <ul>
                        {['home', 'about', 'health', 'lifestyle', 'contact'].map((item) => (
                            <li><a href={`/${item}`} > {item}</a></li>
                        ))}
                    </ul>

                </div>
            </div>

        </nav >
    )
}

export default Navbar;