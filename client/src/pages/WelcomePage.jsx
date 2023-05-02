import React from 'react'
import '../styles/welcomePage.css'
import { Link } from 'react-router-dom'

function WelcomePage() {
    return (
        <div className='welcomePage'>
            <h1>Bienvenue sur <span>SportSee</span> !</h1>
            <p>Visualisez vos efforts en temps réel  💪</p>
            <div className='enter-button'>
                <Link to='/user/12'><button>Profile A</button></Link>
                <Link to='/user/18'><button>Profile B</button></Link>
            </div>
        </div>
    )
}

export default WelcomePage