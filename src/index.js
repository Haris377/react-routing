import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
