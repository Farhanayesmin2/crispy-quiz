import React from 'react';
import './Home.css';
import logo from "../../Images/images-book-1-5.webp";
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
              <img className='w-52 ' src={logo}></img>
              <div className='absolute inset-0 pt-28 '>
            
                <button className="  btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-pulse ">Register Now</button>
              
              </div>
            
 
  <div id="item1" className="carousel-item text-center w-full relative h-48 ">
              <div>
                <h1 className='absolute inset-0 text-4xl font-bold animate-pulse py-8  '>Get Premium Quiz Set</h1>
                <span className='absolute inset-0 py-20 '>Gain Your Knowledge</span>
              </div>
              <div className='absolute inset-0 pt-28 '>
            
              <label htmlFor="my-modal-6" className="btn modal-button btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-pulse">Register Now</label>


<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>
              </div>
    
  </div> 
  <div id="item3" className="carousel-item w-full">
   <img className='w-52 ' src={logo}></img>
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
       
<label htmlFor="my-modal-6" className="btn modal-button btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg animate-pulse">Register Now</label>


<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>






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