import React from 'react'
import PropTypes from 'prop-types'
import '../styles/sessionTiming.css'
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, Rectangle } from 'recharts';




function SessionTiming({ data }) {
    const sessionData = data.averageSessions.sessions

    const CustomizedCursor = ({ width, points }) => {
        return (
            <Rectangle
                fill='rgba(0,0,0,0.2)'
                width={width}
                height={width}
                x={points[0].x}
            />
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="time">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='bottomInfosDiv session-timing'>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="81%" margin="0">
                <LineChart width={300} height={100} data={sessionData}>
                    <Line type="natural" dot={false} dataKey="sessionLength" stroke="#ffff" strokeWidth={2} />
                    <XAxis data='day' stroke="#ffff" axisLine={false} tickLine={false} tickMargin={0} />
                    <Tooltip cursor={<CustomizedCursor />} content={CustomTooltip} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

SessionTiming.propTypes = {
    data: PropTypes.object,
    day: PropTypes.string,
    active: PropTypes.bool,
    payload: PropTypes.string,
    width: PropTypes.number,
    points: PropTypes.number
}

export default SessionTiming