import React from 'react';



const Topic = ({ topic }) => {
    const { question, logo, correctAnswer,option } = topic;
   console.log(topic.options);
 
    const questions = question.split('<p>', 2);
  
    return (
        <div>
            
         
                <div className="card w-full container mx-auto image-full">
  
  <div className="card-body">
    <h2 className="card-title"> <h1> {question}</h1> </h2>
                    <div className='grid grid-cols-2 text-start gap-5'>
                           
          <div>
            {
                topic.options.map(answer => <div  
                >  <input type="radio" name="radio-4" className="radio radio-accent" checked />{answer}</div>)   
        }
            </div>   
                       
                   
   </div>
    <div className="card-actions justify-end">
      <button className="btn btn-success">Buy Now</button>
    </div>
  </div>
</div>
         
        </div>
    );
};

export default Topic;