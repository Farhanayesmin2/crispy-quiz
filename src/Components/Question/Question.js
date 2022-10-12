import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Question = () => {
    return (
        <div className='pt-12'>
       <div className="card w-full container mx-auto  bg-base-100 shadow-xl bg-gradient-to-r from-purple-200 to-gray-200 ">
  <div className="card-body">
    <h2 className="card-title "> <QuestionMarkCircleIcon className='w-4 h-4'></QuestionMarkCircleIcon>    What is the purpose of react router?</h2>
    <p className='text-start'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
            {/* Question 2 */}
            <div className='pt-12'>
            <div className=" card w-full container mx-auto  bg-base-100 shadow-xl bg-gradient-to-r from-red-200 to-gray-200 ">
  <div className="card-body">
    <h2 className="card-title "> <QuestionMarkCircleIcon className='w-4 h-4'></QuestionMarkCircleIcon>    What is the purpose of react router?</h2>
    <p className='text-start'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
    <div className="card-actions justify-end">
    </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Question;