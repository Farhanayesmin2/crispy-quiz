import React from 'react';


const Topic = ({ topic }) => {
    const { question, logo, total } = topic;
  // console.log(topic);
 
    const questions = question.split('<p>', 2);
  
    return (
        <div>
           
            <div className="card w-full container mx-auto image-full">
  
  <div className="card-body">
    <h2 className="card-title"> <h1> {questions}</h1> </h2>
     <div>
                        
   </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
         
        </div>
    );
};

export default Topic;