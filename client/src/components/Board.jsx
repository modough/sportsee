import React from 'react'
import '../styles/board.css'
import UserName from './UserName'
import Chart from './Chart'
import { useParams } from 'react-router-dom'
import FetchDatas from '../utils/FetchDatas'


/**
 * The function returns a section containing a UserName component and a Chart component, and is
 * exported as the default component.
 * @returns A React component called `Board` is being returned. This component contains two child
 * components, `UserName` and `Chart`, which are rendered inside a `section` element with an `id` of
 * "board".
 */
function Board() {
    const { id } = useParams()
    const mainData = FetchDatas(`http://localhost:3000/user/${id}`, id)

    return (
        <section id='board'>
            {mainData && <UserName data={mainData} />}
            <Chart />
        </section>
    )
}

export default Board