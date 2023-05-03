import React from 'react'
import '../styles/performance.css'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

/**
* Displays a Radar Chart of performance data for various activities
* @param {Object} props - The props object of the component.
* @param {Array} props.performance - The performance data array consisting of objects with kind and value.
* @returns {JSX.Element} - Returns the Radar Chart of performance data wrapped in a div element.
*/

function Performance({ performance }) {

    const newPerformanceData = performance.map((elmt) => {
        let newKind = 'Intensité'
        if (elmt.kind === 1) {
            newKind = 'Cardio'
        }
        else if (elmt.kind === 2) {
            newKind = 'Energie'
        }
        else if (elmt.kind === 3) {
            newKind = 'Endurance'
        }
        else if (elmt.kind === 4) {
            newKind = 'Force'
        }
        else if (elmt.kind === 5) {
            newKind = 'Vitesse'
        }
        return { kindTitle: newKind, value: elmt.value }
    })

    return (
        <div className='bottomInfosDiv intensity'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="75%" data={newPerformanceData} >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kindTitle" tick={{ fill: "white", fontSize: 12 }} />
                    <Radar dataKey="value" stroke="#FF0101B2" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

Performance.propTypes = {
    performance: PropTypes.array
}
export default Performance