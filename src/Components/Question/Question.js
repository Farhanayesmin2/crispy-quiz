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
    <h2 className="card-title "> <QuestionMarkCircleIcon className='w-4 h-4'></QuestionMarkCircleIcon> How does work  context api in React?</h2>
    <p className='text-start'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        </p>
    <div className="card-actions justify-end">
    </div>
    </div>
  </div>
           
            <div className='py-12'>
            <div className=" card w-full container mx-auto  bg-base-100 shadow-xl bg-gradient-to-r from-green-200 to-gray-200 ">
  <div className="card-body">
    <h2 className="card-title "> <QuestionMarkCircleIcon className='w-4 h-4'></QuestionMarkCircleIcon> How does work  useRef Hook?</h2>
    <p className='text-start'>
    useRef() only returns one item. It returns an Object called current.
When we initialize useRef we set the initial value: useRef(0).
                                It's like doing this: const count = current: 0. We can access the count by using count.current.
                                useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                        </p>
    <div className="card-actions justify-end">
    </div>
    </div>
  </div>
</div>
            
            </div>
            </div>
    );
};

export default Question;