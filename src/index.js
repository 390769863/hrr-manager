import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/demo/lify';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
