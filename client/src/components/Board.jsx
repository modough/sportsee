import React from 'react'
import '../styles/board.css'
import UserName from './UserName'
import Chart from './Chart'
import { dataBase } from '../data/db'
import { useParams } from 'react-router-dom'

/**
 * The function returns a section containing a UserName component and a Chart component, and is
 * exported as the default component.
 * @returns A React component called `Board` is being returned. This component contains two child
 * components, `UserName` and `Chart`, which are rendered inside a `section` element with an `id` of
 * "board".
 */
function Board() {
    const { id } = useParams()
    const userData = dataBase.find((data) => { return data.id === parseInt(id) })
    console.log(userData)
    return (
        <section id='board'>
            <UserName data={userData} />
            <Chart data={userData} />
        </section>
    )
}

export default Board