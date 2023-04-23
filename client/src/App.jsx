import React from 'react'
import TopNavbar from './components/TopNavbar'
import './styles/App.css'
import UserPage from './pages/UserPage'



/**
 * The function returns a JSX element that renders a top navigation bar and a user page within a
 * section element.
 * @returns The App component is being returned, which contains a section with an id of 'main' and two
 * child components: TopNavbar and UserPage.
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