import React from 'react';

import classes from './Child.module.css';

const Child = (props) => {
    return (
        <div
            className={classes.all_q}
            id={props.id}
            key={props.id}>
            {props.title}
        </div>
    )
};

export default Child;