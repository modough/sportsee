import React, { Suspense, lazy } from 'react'
import '../styles/board.css'
import UserName from './UserName'

import { useParams } from 'react-router-dom'
import FetchDatas from '../utils/FetchDatas'
import LoadingPage from '../pages/LoadingPage'
import { URL } from '../utils/Url'

/**
 * The Board component, which displays a user's data dashboard.
 * @returns {JSX.Element} The rendered component.
 */

function Board() {
    const { id } = useParams()
    const mainData = FetchDatas(`${URL}/user/${id}`, id)
    const Chart = lazy(() => import('../components/Chart.jsx'))

    return (
        <section id='board'>
            <Suspense fallback={<LoadingPage />}>
                {mainData && <UserName firstName={mainData.data.userInfos.firstName} />}
                <Chart />
            </Suspense>
        </section>
    )
}

export default Board