import React from 'react';

import classes from './Main.module.css';
import illustration from '../../images/illustration.png';

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.aboutUs}>
                <p>ABOUT US</p>
                <p>The occupational traffic permit is one of the most important things in the company when carrying out
                freight transport. In fact, it is a prerequisite for doing business trffic at all.</p>
                <div className={classes.request}>
                    <span>How do you do when you need to obtain a commercial traffic permit for freight transport to your
                    business?</span>
                </div>
            </div>
            <img src={illustration} alt="illustration" className={classes.illustration} />
        </div>
    )
};

export default Main;