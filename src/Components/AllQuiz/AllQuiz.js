import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const AllQuiz = () => {
    const allQuiz = useLoaderData();

    console.log(allQuiz.options);

    return (
        <div>
            <h1>This is all quiz..</h1>
            <div className='grid gap-6 mx-10'>
            {
                 allQuiz.data.questions.map(topic => <Topic topic={topic}></Topic>)
               
            }
            </div>
           
            
             
        </div>
    );
};

export default AllQuiz;