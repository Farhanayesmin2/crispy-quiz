
import './App.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
<Header></Header>


      <h1 className='bg-red-300'> Assalamu alaikum.</h1>
      <h1 class="text-3xl font-bold underline">
        Hello world!
        
      </h1>
      <button className="btn ">Button</button>
      <button className='btn btn-disabled btn-red-300'>Crispy Quiz</button>
      <div> <BeakerIcon className="h-6 w-6 text-blue-500"/></div>
    </div>
  );
}

export default App;
