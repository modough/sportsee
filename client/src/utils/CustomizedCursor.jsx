import React from "react";
import PropTypes from 'prop-types'
import { Rectangle } from "recharts";


/**
 * A React component that represents a customized cursor for a chart.
 * @param {Object} props - The component props.
 * @param {number} props.width - The width and height of the cursor.
 * @param {Object[]} props.points - An array of objects that represents the coordinates of the cursor on the chart.
 * @param {number} props.points[].x - The x coordinate of the cursor on the chart.
 * @returns {JSX.Element} The component's UI representation.
 */

export const CustomizedCursor = ({ width, points }) => {
    return (
        <Rectangle
            fill='rgba(0,0,0,0.2)'
            width={width}
            height={width}
            x={points[1].x}
        />
    );
};
CustomizedCursor.propTypes = {
    width: PropTypes.number,
    points: PropTypes.array
}