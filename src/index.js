import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './admin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
