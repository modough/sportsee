import React from 'react'
import Logo from '../assets/logo.svg'
import '../styles/topNavbar.css'

function TopNavbar() {
    return (
        <nav className="topNavbar">
            <div className='logo'>
                <img src={Logo} alt="logo du site" />
            </div>
            <ul className='topNavbar-list'>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglages</li>
                <li>Communauté</li>
            </ul>
        </nav>
    )
}

export default TopNavbar