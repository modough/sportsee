import React from 'react'
import '../styles/chart.css'
import DailyActivity from './DailyActivity'
import SessionTiming from './SessionTiming'
import Score from './Score'
import Biology from './Biology'
import Performance from './Performance'
import { useParams } from 'react-router-dom'
import FetchDatas from '../utils/FetchDatas'

/* This is a functional component in JavaScript React that returns a section element with two article
elements inside. The first article element has two div elements with some text and a ul element with
two li elements. The second article element has four div elements with an image and some text inside
each one. The component is exported as default. */

function Chart() {
    const { id } = useParams()
    const mainData = FetchDatas(`http://localhost:3000/user/${id}`, id)
    const sessionData = FetchDatas(`http://localhost:3000/user/${id}/average-sessions`, id)
    const performanceData = FetchDatas(`http://localhost:3000/user/${id}/performance`, id)

    return (
        <section className='chart'>
            <article className='left-chart'>
                <DailyActivity />
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