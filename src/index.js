
import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Rc from './components/Rc';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store/store';

// Para habilitar las sesiones en el backend
import axios from 'axios';
axios.defaults.withCredentials = true


class App extends Component {

    render() {
      return (          
        <div>
          <BrowserRouter>
          <div>
            
            <Rc />
            
          </div>
          </BrowserRouter>
        </div>
      );
    }
  }

ReactDOM.render(
  
  <Provider store={store}>
    <App /> 
  </Provider>,

  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
