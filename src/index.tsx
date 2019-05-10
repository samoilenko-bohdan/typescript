import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {weatherReducer} from './redux/weatherReducer'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(weatherReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
