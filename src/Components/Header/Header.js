import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-cyan-200 to-gray-200 shadow-lg md:container md:mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-3xl font-mono px-5 text-emerald-900"> <span className=' '> <strong className='text-4xl font-bolder text-indigo-900'>C</strong>rispy</span><strong className='text-4xl text-indigo-900 font-bolder '>Q</strong>uiz</a>
  </div>
  </div>
 
  <div className="navbar-end text-lg font-serif font-bold text-emerald-900">
<Link className='px-2' to='home'>Home</Link>
<Link className='px-2' to='quiz'>Quiz</Link>
<Link className='px-2' to='statistics'>Statistics</Link>
<Link className='px-3' to='blog'>Blog</Link>
                    



    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
   
                </div>
                
</div>
        </div>
    );
};

export default Header;