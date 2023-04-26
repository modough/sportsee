import React from 'react'
import '../styles/score.css';
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

function Score({ data }) {
    const scorePercent = data.data.todayScore
    const newData = [{ value: scorePercent * 100, fill: 'red', cornerRadius: 50 }];

    return (
        <div className='bottomInfosDiv score'>
            <p className='title'>Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="80%" outerRadius="100%" barSize={10} data={newData}>
                    <RadialBar minAngle={10}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        clockWise dataKey="value" />
                </RadialBarChart>
            </ResponsiveContainer>
            <span className='scoreText'>
                {scorePercent * 100}%
                <p>de votre objectif</p>
            </span>
        </div>
    )
}
Score.propTypes = {
    data: PropTypes.object
}
export default Score