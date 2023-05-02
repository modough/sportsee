import React from 'react'
import '../styles/chart.css'
import DailyActivity from './DailyActivity'
import SessionTiming from './SessionTiming'
import Score from './Score'
import Biology from './Biology'
import Performance from './Performance'
import { useParams } from 'react-router-dom'
import FetchDatas from '../utils/FetchDatas'




/**
 * The Chart function fetches data from various endpoints and renders different components based on the
 * fetched data.
 * @returns The Chart component is being returned, which contains several child components that are
 * conditionally rendered based on whether their respective data has been fetched successfully.
 */
function Chart() {
    const { id } = useParams()
    const mainData = FetchDatas(`http://localhost:3000/user/${id}`, id)
    const sessionData = FetchDatas(`http://localhost:3000/user/${id}/average-sessions`, id)
    const performanceData = FetchDatas(`http://localhost:3000/user/${id}/performance`, id)
    const activityData = FetchDatas(`http://localhost:3000/user/${id}/activity`, id)

    return (
        <section className='chart'>
            <article className='left-chart'>
                {activityData && <DailyActivity activity={activityData} />}
                <div className='chart-bottomInfos'>
                    {sessionData && <SessionTiming session={sessionData} />}
                    {performanceData && <Performance performance={performanceData} />}
                    {mainData && <Score score={mainData} />}
                </div>
            </article>
            <article className='right-chart'>
                {mainData && <Biology data={mainData} />}
            </article>
        </section>
    )
}

export default Chart