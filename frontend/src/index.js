import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'


const App = lazy(()=> import("./App"))

ReactDOM.render(
  <>
  <BrowserRouter>
  <Suspense fallback={<h1>App loading</h1>}>
  <App />  
  </Suspense>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


