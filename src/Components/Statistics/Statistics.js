import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart } from 'recharts';


const Statistics = () => {
    const reChart = useLoaderData();
    const { data } = reChart; 
        console.log(data);
    return (
        <div>  

            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
            >
                 <CartesianGrid strokeDasharray="2 3" />
          <XAxis dataKey="name" />
                <YAxis dataKey="total" />
          <Tooltip />
          <Legend />
        <Bar  dataKey="total" stackId="a" stroke="#8884d8" />
        <Bar  dataKey="" stackId="a" stroke="#82ca9d" />
        </BarChart>
        </div>
    );
};

export default Statistics;