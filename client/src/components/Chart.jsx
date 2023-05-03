import React from 'react'
import '../styles/chart.css'
import DailyActivity from './DailyActivity'
import SessionTiming from './SessionTiming'
import Score from './Score'
import Biology from './Biology'
import Performance from './Performance'
import { useParams } from 'react-router-dom'
import FetchDatas from '../utils/FetchDatas'
import { URL } from '../utils/Url'


/**

Renders the main chart component displaying user's data.

@returns {JSX.Element} The Chart component JSX.
*/

function Chart() {
    const { id } = useParams()
    const mainData = FetchDatas(`${URL}/user/${id}`, id)
    const sessionData = FetchDatas(`${URL}/user/${id}/average-sessions`, id)
    const performanceData = FetchDatas(`${URL}/user/${id}/performance`, id)
    const activityData = FetchDatas(`${URL}/user/${id}/activity`, id)
    console.log(activityData)

    return (
        <section className='chart'>
            <article className='left-chart'>
                {
                    activityData &&
                    <DailyActivity
                        sessions={activityData.data.sessions ||
                            activityData.activity.sessions}
                    />
                }
                <div className='chart-bottomInfos'>
                    {
                        sessionData &&
                        <SessionTiming
                            sessions={sessionData.data.sessions ||
                                sessionData.averageSessions.sessions}
                        />
                    }
                    {
                        performanceData &&
                        <Performance
                            performance={performanceData.data.data ||
                                performanceData.performance.data}
                        />
                    }
                    {
                        mainData &&
                        <Score score={mainData.data.todayScore ||
                            mainData.data.score}
                        />
                    }
                </div>
            </article>
            <article className='right-chart'>
                {
                    mainData &&
                    <Biology keyData={mainData.data.keyData}
                    />
                }
            </article>
        </section>
    )
}

export default Chart