import './shared/css/app.css';
import React from 'react';
import Hello from './component.jsx';
//import MyModule from './modules/MyModule.js';


main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}