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
                        <Link to="/" activeClassName="active" >About</Link>
                    </li>
                    <li>
                        <Link to="/projects" activeClassName="active" >Projects</Link>
                    </li>
                    <li>
                    <Link to="/contact" activeClassName="active" >Contact</Link>
                    </li>
                    <li>
                    <Link to="/blog" activeClassName="active" >Blog</Link>
                    </li>
                </ul>

            </div>
            
        </nav>
    )
}


export default Header;