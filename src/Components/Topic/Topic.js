import {  EyeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  





const Topic = ({ topic }) => {

    const { question,  correctAnswer, options } = topic;
    console.log(options);
    console.log(correctAnswer);
 
    const questions = question.split('<p>', 2);
    const notify = () => toast.success(correctAnswer);
        
    const rightAnswer = (answer) => {
            if (answer === correctAnswer) {
                toast.success('Answer Is Correct', { autoClose: 500 });
            
            }
            else {
                toast.warn('Opps,Wrong Answer', { autoClose: 500 });
          
            }
        }

    return (
        <div>
            
         
                <div className="card  w-full container mx-auto ">
  
  <div className="card-body bg-gradient-to-r from-cyan-200 to-gray-200">
    <h2 className="card-title"> <h1><QuestionMarkCircleIcon className=' h-6 w-6 text-purple-900 inline-block'></QuestionMarkCircleIcon> {questions}</h1> </h2>
                    <div className='grid grid-cols-1 text-start gap-5'>
                           
          <div className='grid grid-cols-2 text-start gap-5'>
            {
                topic.options.map(answer =>  <div className='flex items-center px-12 '
                >  <input type="radio" name="radio-4" className="radio radio-accent text-xl font-extralight" onClick={()=>rightAnswer(answer)} checked />{answer}</div>
                )   
        }
            </div>          
            </div>
                   <div className="card-actions justify-end">
                        <button onClick={notify}><EyeIcon className=' h-8 w-8 hover:text-indigo-600 text-purple-300 '></EyeIcon>  </button> 
                        <ToastContainer 
                        autoClose={5000}
                        className="pt-10  text-center"
                        />                 
    </div>
  </div>
</div>
            {
                
            }
        </div>
    );
};

export default Topic;