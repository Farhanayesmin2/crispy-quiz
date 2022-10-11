import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className='container  mx-auto text-center'>
            
            <div className='background '>
               
                <div className="carousel w-full ">
            <div id="item1" className="carousel-item text-center w-full relative h-48 ">
              <div>
                <h1 className='absolute inset-0 text-4xl font-bold animate-pulse py-8  '>Get Premium Quiz Set</h1>
                <span className='absolute inset-0 py-20 '>Gain Your Knowledge</span>
              </div>
              <div className='absolute inset-0 pt-28 '>
            
              <button className="  btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-pulse ">Register Now</button>
              </div>
            
 
  <div id="item1" className="carousel-item text-center w-full relative h-48 ">
              <div>
                <h1 className='absolute inset-0 text-4xl font-bold animate-pulse py-8  '>Get Premium Quiz Set</h1>
                <span className='absolute inset-0 py-20 '>Gain Your Knowledge</span>
              </div>
              <div className='absolute inset-0 pt-28 '>
            
              <button className="  btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-pulse ">Register Now</button>
              </div>
    
  </div> 
  <div id="item3" className="carousel-item w-full">
   
  </div> 
  <div id="item4" className="carousel-item w-full">
    
  </div>
            </div> 
            <div id="item1" className="carousel-item text-center w-full relative h-48 ">
              <div>
                <h1 className='absolute inset-0 text-4xl font-bold animate-pulse py-8  '>Get Premium Quiz Set</h1>
                <span className='absolute inset-0 py-20 '>Gain Your Knowledge</span>
              </div>
              <div className='absolute inset-0 pt-28 '>
            
              <button className="  btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-pulse ">Register Now</button>
              </div>
            </div>
          </div>
          </div>
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
 
          </div>
       
        
    );
};

export default Home;