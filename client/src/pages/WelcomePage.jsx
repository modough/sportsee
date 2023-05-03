import React, { Fragment } from 'react'
import '../styles/welcomePage.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

/**
 * The function returns a React component for a welcome page with links to two user profiles.
 * @returns The `WelcomePage` component is being returned, which contains a welcome message, a
 * description of the app, and two buttons that link to different user profiles.
 */

function WelcomePage() {
    return (
        <Fragment>
            <img src={Logo} className='welcomePage-image' alt="logo" />
            <div className='welcomePage'>
                <h1>Bienvenue sur <span>SportSee</span> !</h1>
                <p>Visualisez vos efforts en temps réel  💪</p>
                <div className='enter-button'>
                    <Link to='/user/12'><button>Profile A</button></Link>
                    <Link to='/user/18'><button>Profile B</button></Link>
                </div>
            </div>
            <div className="welcomePage-copyright">
                <p>Copyright, SportSee 2020</p>
            </div>
        </Fragment>
    )
}

export default WelcomePage