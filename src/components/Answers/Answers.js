import React, { Fragment } from 'react';

import classes from './Answers.module.css';


const Answers = (props) => {
    return (
        <Fragment>
            {/* <div className={`${classes.class_1} ${props.a_1}`}>
                Vatican
            </div>
            <div className={`${classes.class_2} ${props.a_2}`}>
                Ludwig
            </div> */}
            <div className={props.class_3}>
                Krone
            </div>
            <div className={props.class_4}>
                The French Open (Roland Garros)
            </div>
            <div className={props.class_5}>
                Constantinople
            </div>
            <div className={props.class_6}>
                Wellington
            </div>
            <div className={props.class_7}>
                Queen's Park Rangers
            </div>
            <div className={props.class_8}>
                Football
            </div>
            <div className={props.class_9}>
                Nautical mile (it’s 1.15 miles)
            </div>
            <div className={props.class_10}>
                Spandau Ballet
            </div>
            <div className={props.class_11}>
                1950s (1958)
            </div>
        </Fragment>
    )
};

export default Answers;