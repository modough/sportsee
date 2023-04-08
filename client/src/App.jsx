import { Fragment } from 'react'
import TopNavbar from './components/TopNavbar'
import './styles/App.css'
import UserPage from './pages/UserPage'


function App() {
    return (
        <Fragment>
            <TopNavbar />
            <UserPage />
        </Fragment>
    )
}

export default App