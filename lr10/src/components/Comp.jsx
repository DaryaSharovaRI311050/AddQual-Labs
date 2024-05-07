import React from 'react';
import './Comp.css';

const Comp = (properties) => {
    return (
        <div class='comp'>
            <img className='picture' src={properties.image} alt='pic'/>
            <div class='comp-header'>{properties.title}</div>
            <div class='comp-text'>{properties.text}</div>
        </div>
    );
};

export default Comp;
