import React from 'react'
import TopNavbar from './TopNavbar'
import '../styles/App.css'
import UserPage from '../pages/UserPage'

/**
 * The main application component.
 * @returns {JSX.Element} The rendered application.
 */


function App() {
    return (
        <section id='main'>
            <TopNavbar />
            <UserPage />
        </section>
    )
}

export default App