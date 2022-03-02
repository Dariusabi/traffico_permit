import React from 'react';

import classes from './Section.module.css';
import callCenter from '../../images/call_center.png';

const Section = () => {
    return (
        <div className={classes.section}>
            <img src={callCenter} alt="call_center" className={classes.callCenter} />
            <div className={classes.details}>
                <p>HOW TO PLAY</p>
                <p>When applying for a traffic permit, there are certain requirements that you must meet that are
                included
                in the examination: requirements for professional knowledge, solid establishment, good reputation
                and
                financial resources. Important to remember is to confirm your application for a traffic permit by
                the
                    company's company signer or CEO.</p>
            </div>
        </div>
    )
};

export default Section;