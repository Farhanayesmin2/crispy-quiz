import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, logo, total,id } = item;
    console.log(item);

// Button Handle
const navigate = useNavigate();

const addHandleButton = (id) =>{

    navigate(`/quiz/${id}`);
}




    return (
        <div>
            <span class="flex ">
  
  <span class="relative animate-spin rounded-full inline-flex   bg-red-700 text-white">Top</span>
</span>
            <div className="card w-96  bg-white shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
      <div className="badge  bg-success border border-purple-800">Level 1</div>
    </h2>
    <p>Choose Me Please!!!</p>
    <div className="card-actions justify-end">
                        <button onClick={() => addHandleButton(id)} className="btn btn-outline btn-success w-full">Start Quiz</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Item;