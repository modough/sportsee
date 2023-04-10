import '../styles/chart.css'
import DailyActivity from './DailyActivity'
import SessionTiming from './SessionTiming'
import Intensity from './Intensity'
import Score from './Score'
import Biology from './Biology'

/* This is a functional component in JavaScript React that returns a section element with two article
elements inside. The first article element has two div elements with some text and a ul element with
two li elements. The second article element has four div elements with an image and some text inside
each one. The component is exported as default. */

function Chart() {
    return (
        <section className='chart'>
            <article className='left-chart'>
                <DailyActivity />
                <div className='chart-bottomInfos'>
                    <SessionTiming />
                    <Intensity />
                    <Score />
                </div>
            </article>
            <Biology />
        </section>
    )
}

export default Chart