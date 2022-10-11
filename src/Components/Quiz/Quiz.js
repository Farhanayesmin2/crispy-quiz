import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizes = quiz.data;



    return (
        <div>
<h1 className='text-4xl pt-12 pb-2 from-success-content text-indigo-900 placeholder-gray-200 font-bold animate-bounce'>Select Your Quiz Items</h1>
            <p className='text-xl'>Explore and gain your knowledge</p>
            
            <div className='items-center text-center container sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
                
            <div className='grid gap-12 row-gap-12 md:col-gap-12 my-6   md:grid-cols-3 ms-12 '>
            {
               quizes.map(item => <Item  item={item} ></Item>)
                }
              
            </div>
            </div>
            
        </div>
    );
};

export default Quiz;
{/* <div className='px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
                
<div className='grid gap-12 row-gap-5 my-6   md:grid-cols-2 '> */}