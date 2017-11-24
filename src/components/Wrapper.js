import React from 'react';
import Header from './Header';
import '../index.css';

export default props => [
    <Header key="header" {...props}/>,
    <div key="container" className="container">
         {React.cloneElement(props.children, props)}
    </div>
]