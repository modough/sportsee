import '../styles/board.css'
import UserName from './UserName'
import Chart from './chart'

/**
 * The function returns a section containing a UserName component and a Chart component, and is
 * exported as the default component.
 * @returns A React component called `Board` is being returned. This component contains two child
 * components, `UserName` and `Chart`, which are rendered inside a `section` element with an `id` of
 * "board".
 */
function Board() {
    return (
        <section id='board'>
            <UserName />
            <Chart />
        </section>
    )
}

export default Board