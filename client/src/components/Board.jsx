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
    const userNameData = FetchDatas(`http://localhost:3000/user/${id}`, id)
    const chartData = FetchDatas(`http://localhost:3000/user/${id}/average-sessions`, id)

    return (
        <section id='board'>
            {userNameData && <UserName data={userNameData} />}
            {chartData && <Chart data={chartData} />}
        </section>
    )
}

export default Board