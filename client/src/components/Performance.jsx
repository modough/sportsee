import React from 'react'
import '../styles/intensity.css'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

function Performance({ data }) {
    const performanceData = data.performance.data
    const newPerformanceData = performanceData.map((elmt) => {
        let newKind = ''
        if (elmt.kind === 1) {
            newKind = 'Cardio'
        }
        else if (elmt.kind === 2) {
            newKind = 'Energy'
        }
        else if (elmt.kind === 3) {
            newKind = 'Endurance'
        }
        else if (elmt.kind === 4) {
            newKind = 'Strength'
        }
        else if (elmt.kind === 5) {
            newKind = 'Speed'
        }
        else {
            newKind = 'Intensity'
        }

        return { kindTitle: newKind, value: elmt.value }
    })
    console.log(newPerformanceData)

    return (
        <div className='bottomInfosDiv intensity'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="75%" data={newPerformanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kindTitle" tick={{ fill: "white", fontSize: 12 }} />
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