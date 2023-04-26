import React from 'react'
import '../styles/intensity.css'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

function Performance({ data }) {

    const performanceData = data.performance.data
    console.log(performanceData)
    return (
        <div className='bottomInfosDiv intensity'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" stroke="#FF0101B2" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

Performance.propTypes = {
    data: PropTypes.object
}
export default Performance