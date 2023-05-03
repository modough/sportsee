import React from 'react'
import '../styles/score.css';
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

/* This is a React functional component called `Score` that takes in a prop called `score` and displays
a radial bar chart representing the percentage of the user's score compared to their goal. The
`score` prop is an object that contains data about the user's score, including their current score
and their goal score. The component uses the `RadialBarChart` and `RadialBar` components from the
`recharts` library to display the chart, and the `PropTypes` library to define the expected shape of
the `score` prop. */

function Score({ score }) {
    const scorePercent = score * 100
    const newData = [{ value: scorePercent, fill: 'red', cornerRadius: 50 }];

    return (
        <div className='bottomInfosDiv score'>
            <p className='title'>Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={180} endAngle={90 - scorePercent}
                    innerRadius="80%" outerRadius="100%" barSize={15} data={newData}>
                    <RadialBar minAngle={10} dataKey="value" />
                </RadialBarChart>
            </ResponsiveContainer>
            <span className='scoreText'>
                {scorePercent}%
                <p>de votre objectif</p>
            </span>
        </div>
    )
}
Score.propTypes = {
    score: PropTypes.number
}
export default Score