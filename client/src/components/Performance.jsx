import React from 'react'
import '../styles/performance.css'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

/* This is a React functional component called `Performance` that takes in a prop called `performance`.
It maps the `data` property of the `performance` prop to a new array of objects with `kindTitle` and
`value` properties. It then renders a `RadarChart` component from the `recharts` library using the
new array of objects as data. The `kindTitle` property is used as the data key for the
`PolarAngleAxis` component and the `value` property is used as the data key for the `Radar`
component. The component also has a `propTypes` object that specifies that the `performance` prop
should be an object. */

function Performance({ performance }) {
    console.log(performance)
    const { data } = performance.performance || performance.data
    const newPerformanceData = data.map((elmt) => {
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
    performance: PropTypes.object
}
export default Performance