import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Apli from './Apli';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Apli />, document.getElementById('root2'));
registerServiceWorker();
