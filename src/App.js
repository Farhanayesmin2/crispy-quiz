
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

import AllQuiz from './Components/AllQuiz/AllQuiz';

function App() {

  const  router  = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          
          },
          element: <div>
            <Home></Home>
            <Quiz></Quiz>
          </div>,
        },
        {
          path: 'quiz',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Quiz></Quiz>, 
        },
        {
          path: 'quiz/:quizId',
        
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element:<AllQuiz></AllQuiz>,
        },
            
        {
          path: 'statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>,
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
