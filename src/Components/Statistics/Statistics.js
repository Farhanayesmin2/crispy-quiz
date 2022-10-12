import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const reChart = useLoaderData();
    const { data } = reChart; 
    console.log(data); 
        return (

<div className="card w-full mt-12 mx-auto container text-center bg-base-100 shadow-xl">
  <div className="card-body bg-gradient-to-r from-purple-200 to-gray-100 ">
  <div className='rechart '>  

<LineChart 
className="line-chart "
width={500}
height={300}
data={data}
margin={{
top: 5,
right: 50,
left: 0,
bottom: 5,
}}
>
     <CartesianGrid strokeDasharray="2 3" />
<XAxis dataKey="name" />
    <YAxis dataKey="total" />
<Tooltip />
<Legend />
<Line  dataKey="total" stackId="a" stroke="#8884d8" />
<Line  dataKey="name" stackId="a" stroke="#82ca9d" />
    </LineChart>
   
</div>

  </div>
</div>

);

       
   
};

export default Statistics;