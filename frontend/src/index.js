import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import { StateProvider } from './Container/Serviceprovider';
import Reducer,{initailState} from './Container/Reducer'


const App = lazy(()=> import("./App"))

ReactDOM.render(
  <>
  <BrowserRouter>
<StateProvider initialState={initailState} reducer={Reducer} >
  <Suspense fallback={<p className="lead">Please wait ...</p>}>
  <App />  
  </Suspense>
  </StateProvider>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


