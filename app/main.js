import './shared/css/app.css';
import React from 'react';
import Hello from './component.jsx';


main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}