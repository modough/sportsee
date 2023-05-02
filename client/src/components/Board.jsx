import React from 'react'
import '../styles/board.css'
import UserName from './UserName'
import Chart from './Chart'
import { useParams } from 'react-router-dom'
import FetchDatas from '../utils/FetchDatas'

/**
 * The Board function returns a section containing a UserName component and a Chart component, using
 * data fetched from a specified URL.
 * @returns The `Board` component is being returned, which contains a `section` element with an `id` of
 * "board". Inside the `section`, there is a `UserName` component that receives data from a
 * `FetchDatas` function and a `Chart` component.
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