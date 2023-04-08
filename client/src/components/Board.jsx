import '../styles/board.css'
import UserName from './UserName'
import Chart from './chart'

function Board() {
    return (
        <section id='board'>
            <UserName />
            <Chart />
        </section>
    )
}

export default Board