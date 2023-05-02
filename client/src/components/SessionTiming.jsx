import React from 'react'
import PropTypes from 'prop-types'
import '../styles/sessionTiming.css'
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { CustomizedCursor } from '../utils/CustomizedCursor';
import { CustomTooltip } from '../utils/CustomTooltip';

function SessionTiming({ session }) {

    const { sessions } = session.data || session.averageSessions
    const newSessionData = sessions.map((elmt) => {
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

    return (
        <div className='bottomInfosDiv session-timing'>
            <p>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="81%" margin="0">
                <LineChart data={newSessionData} >
                    <Line className="line" type="monotone" dot={false} dataKey="sessionLength" stroke="#ffff" strokeWidth={2} />
                    <XAxis dataKey='dayInLetter' stroke="#ffff" axisLine={false} tickLine={false} />
                    <Tooltip cursor={<CustomizedCursor />} content={<CustomTooltip style='session' />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

SessionTiming.propTypes = {
    session: PropTypes.object,
}

export default SessionTiming