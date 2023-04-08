import Board from "../components/Board"
import LeftNavbar from '../components/LeftNavbar'
import '../styles/userPage.css'


function UserPage() {
    return (
        <section id="userPage">
            <LeftNavbar />
            <Board />
        </section>
    )
}

export default UserPage