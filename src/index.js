import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/lux-bootstrap.css';
import './assets/lux.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
