import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store'
import * as axios from 'axios';

axios.defaults.baseURL = "https://api.englishpatient.org";
axios.defaults.headers.post['Content-Type'] = 'application/json';

let token = window.localStorage.getItem('token');
if(token) axios.defaults.headers.common['Authorization'] = token;

ReactDOM.render(
  <BrowserRouter basename={ process.env.PUBLIC_URL }>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  
  document.getElementById('root')
);