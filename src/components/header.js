import React from 'react'
import { Link } from 'gatsby'


const Header = () => {
    return (
        <nav className="navbar">
            <div className="container navflex">

                <div className="logo-text">
                <i>Ndie</i>
                </div>

                <ul className="navlinks">
                    <li>
                    <Link to="/" className="active">Home</Link>
                    </li>
                    <li>
                        <Link to="/" >About</Link>
                    </li>
                    <li>
                        <Link to="/" >Projects</Link>
                    </li>
                    <li>
                    <Link to="/" >Contact</Link>
                    </li>
                    <li>
                    <Link to="/" >Blog</Link>
                    </li>
                </ul>

            </div>
            
        </nav>
    )
}


export default Header;