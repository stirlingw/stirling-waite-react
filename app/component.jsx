import './shared/css/app.css';
import React from 'react';

export default class Hello extends React.Component {
    constructor() {
        super();
        this. _handleClick = this. _handleClick.bind(this);
        //this.state = Store.getState();
    }
    render() {
        return <div onClick={this._handleClick}>Hello, world.</div>;
    }
    _handleClick() {
        console.log(this); // this is an ExampleComponent
    }
}