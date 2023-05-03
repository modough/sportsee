import React from 'react'
import '../styles/dailyActivity.css'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from '../utils/CustomTooltip';


/**
 * Displays a daily activity bar chart with weight and calorie information.
 * @param {Object[]} sessions - An array of objects containing data for each day's activity.
 * @param {string} sessions[].name - The name of the day.
 * @param {number} sessions[].kilogram - The weight in kilograms.
 * @param {number} sessions[].calories - The number of calories burned.
 * @returns {JSX.Element} - A React component that displays the daily activity bar chart.
 */

function DailyActivity({ sessions }) {

    return (
        <div className="dailyActivity">
            <div className='chart-topInfos'>
                <p>Activité quotidienne</p>
                <ul className='weightAndCalory'>
                    <li className='weight'><p>Poids (kg)</p></li>
                    <li className='calory'><p>Calories brûlées (kCal)</p></li>
                </ul>
            </div>
            <div className='chart-bottomInfos'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessions} margin={{ top: 5, right: 30, left: 20, bottom: 62 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tickLine={false} />
                        <YAxis orientation='right' tickLine={false} axisLine={false} ticks={[0, 300, 600]} />
                        <Tooltip content={<CustomTooltip style='activity' />} />
                        <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
                        <Bar dataKey="calories" fill="#FF0000" barSize={10} radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

DailyActivity.propTypes = {
    sessions: PropTypes.array,
}

export default DailyActivity