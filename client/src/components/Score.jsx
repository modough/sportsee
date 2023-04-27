import React from 'react'
import '../styles/score.css';
import PropTypes from 'prop-types'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

function Score({ data }) {
    const scorePercent = data.data.todayScore * 100 || data.data.score * 100
    const newData = [{ value: scorePercent, fill: 'red', cornerRadius: 50 }];

    return (
        <div className='bottomInfosDiv score'>
            <p className='title'>Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart startAngle={180} endAngle={90 - scorePercent}
                    innerRadius="80%" outerRadius="100%" barSize={15} data={newData}>
                    <RadialBar minAngle={10}
                        dataKey="value" />
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
    data: PropTypes.object
}
export default Score