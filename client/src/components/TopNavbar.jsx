import React from 'react'
import Logo from '../assets/logo.svg'
import '../styles/topNavbar.css'
import { Link } from 'react-router-dom'

/**
 * This is a React component that renders a top navigation bar with a logo and a list of links.
 * @returns A React component called TopNavbar is being returned. It contains a navigation bar with a
 * logo and a list of links.
 */
function TopNavbar() {
    return (
        <nav className="topNavbar">
            <div className='logo'>
                <img src={Logo} alt="logo du site" />
            </div>
            <ul className='topNavbar-list'>
                <li><Link to='/'>Accueil</Link></li>
                <li>Profil</li>
                <li>Réglages</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}

export default TopNavbar