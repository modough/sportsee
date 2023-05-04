import React, { Fragment } from "react";
import PropTypes from 'prop-types'
import '../styles/customTooltip.css';

/**
* A custom tooltip component for a chart
* @function CustomTooltip
* @param {Boolean} active - Determines if the tooltip is active
* @param {Array} payload - Array of chart data
* @param {String} style - The style of the tooltip
* @returns {JSX.Element|null} A tooltip component or null if not active
*/

export const CustomTooltip = ({ active, payload, style }) => {
    if (active && payload && payload.length) {
        return (
            <Fragment>
                {
                    style === 'session' ?
                        <div className="custom-tooltip session">
                            <p className="time"> {`${payload[0].value} min`} </p>
                        </div> :
                        <div className='custom-tooltip activity'>
                            <p className='label-kilogram'>
                                {`${payload[0].value}kg`}
                            </p>
                            <p className='label-calory'>
                                {`${payload[1].value}kcal`}
                            </p>
                        </div>
                }
            </Fragment>
        );
    }
    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    style: PropTypes.string
}