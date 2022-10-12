import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';

const Rechart = () => {
    const reChart = useLoaderData();
    const charts = reChart.data;

    return (
        <div>
            {
                charts.map(chart => <Statistics chart={chart}></Statistics>)
            }
        </div>
    );
};

export default Rechart;