import { Fragment } from 'react'
import TopNavbar from './components/TopNavbar'
import './styles/App.css'
import UserPage from './pages/UserPage'


function App() {
    return (
        <section id='main'>
            <TopNavbar />
            <UserPage />
        </section>
    )
}

export default App