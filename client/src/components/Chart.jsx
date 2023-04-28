import React from 'react'
import PropTypes from 'prop-types'
import '../styles/chart.css'
import DailyActivity from './DailyActivity'
import SessionTiming from './SessionTiming'
import Score from './Score'
import Biology from './Biology'
import Performance from './Performance'

/* This is a functional component in JavaScript React that returns a section element with two article
elements inside. The first article element has two div elements with some text and a ul element with
two li elements. The second article element has four div elements with an image and some text inside
each one. The component is exported as default. */

function Chart({ data }) {

    return (
        <section className='chart'>
            <article className='left-chart'>
                <DailyActivity />
                <div className='chart-bottomInfos'>
                    <SessionTiming data={data} />
                    <Performance data={data} />
                    <Score data={data} />
                </div>
            </article>
            <article className='right-chart'>
                <Biology data={data} />
            </article>
        </section>
    )
}

Chart.propTypes = {
    data: PropTypes.object,
}

export default Chart