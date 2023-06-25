import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import Game from './pages/Game';
import ChooseWeather from './pages/ChooseWeather';
import Score from './pages/Score';
import CurrentWeather from './pages/CurrentWeather';



const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index:true, element: <Landing />},
      {path: 'choose', element: <ChooseWeather /> },
      {path: 'current', element: <CurrentWeather /> },
      {path: 'game', element: <Game />},
      {path: 'score', element:<Score />}
    ]
  

  }
]) 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
