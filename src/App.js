
import './App.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Header from './Components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Question from './Components/Question/Question';
import Quiz from './Components/Quiz/Quiz';
function App() {

  const  router  = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element: <Home></Home>,
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>,
        },
        {
          path: 'quiz',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Quiz></Quiz>,
        },
        {
          path: 'blog',
          element: <Question></Question>
        },
      ]
    },
    {
      path: '*',
      element: <NotFoundPage></NotFoundPage>,
    },
    

  ])

  return (

    
    <div className="App">

<RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
