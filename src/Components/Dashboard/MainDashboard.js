import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';

export default function MainDashboard() {
    return (
        <div>
            <PieChart/>
            <LineChart/>
        </div>
    )
}
