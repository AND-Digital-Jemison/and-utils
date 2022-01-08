import App from './App.jsx';
import ReactDOM from 'lib-app/react-dom';
import React from 'lib-app/react';
console.log('yyy', process.env.HOST);

ReactDOM.render(<App />, document.getElementById('app'));
