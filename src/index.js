import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import { auth } from './firebase';
import App from './components/App'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
