import React from 'react'
import PropTypes from 'prop-types'
import '../styles/sessionTiming.css'
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomizedCursor } from '../utils/CustomizedCursor';
import { CustomTooltip } from '../utils/CustomTooltip';

function SessionTiming({ data }) {
    const sessionData = data.averageSessions.sessions

    const newSessionData = sessionData.map((elmt) => {
        let newDay = ''

        if (elmt.day === 1) {
            newDay = 'L'
        }
        else if (elmt.day === 2) {

            newDay = 'M'
        }
        else if (elmt.day === 3) {
            newDay = 'M'
        }
        else if (elmt.day === 4) {
            newDay = 'J'
        }
        else if (elmt.day === 5) {
            newDay = 'V'
        }
        else if (elmt.day === 6) {
            newDay = 'S'
        }
        else {
            newDay = 'D'
        }
        return { dayInLetter: newDay, sessionLength: elmt.sessionLength }
    })


    console.log(newSessionData)

    return (
        <div className='bottomInfosDiv session-timing'>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="81%" margin="0">
                <LineChart data={newSessionData}>
                    <Line type="natural" dot={false} dataKey="sessionLength" stroke="#ffff" strokeWidth={2} />
                    <XAxis dataKey='dayInLetter' stroke="#ffff" axisLine={false} tickLine={false} tickMargin={0} />
                    <Tooltip cursor={<CustomizedCursor />} content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

SessionTiming.propTypes = {
    data: PropTypes.object,
}

export default SessionTiming