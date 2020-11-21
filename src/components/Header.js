import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                {/* Google Books */}
                <img src={logo} alt="logo" />
            </Link>
            <nav className="header-right">
                <Link to="/" className="active" >
                    Home
                </Link>
                <Link to="/details" >
                    Details
                </Link>
                <Link to="/favorites" >
                    Favorites
                </Link>


            </nav>
        </header>
    )
}
