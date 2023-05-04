import React from 'react'
import '../styles/score.css';
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'


/**
* A component that displays the user's score and progress towards their goal as a radial bar chart.
* @param {Object} props - The component props.
* @param {number} props.score - The user's current score as a decimal value between 0 and 1.
* @returns {JSX.Element} - The rendered component.
*/

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