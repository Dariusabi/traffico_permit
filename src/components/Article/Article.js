import React, { useState, useEffect } from 'react';


import classes from './Article.module.css';
import faq from '../../images/faq.png';
import Answers from '../Answers/Answers';
// import Data from '../Data/Data';


const Article = () => {

    const [apiData, setApiData] = useState();

    useEffect(() => {
        fetch('questions.json')
            .then((res) => res.json())
            .then((data) => {
                let left = data;
                const right = left.map(user => {

                    // const total = () => {
                    //     for (let i = 0; i < left.length; i++) {
                    //         if (left.question[i] == left.answer[i]) {
                    //             <Answers>
                    //                 {user.answers[i]}
                    //             </Answers>
                    //         }
                    //     }
                    // };

                    return (
                        <>
                            <div className={classes.all_q} key={user.id} >
                                <p>
                                    {user.question}
                                </p>
                                <div className={classes.min}>
                                    <div className={classes.minus}></div>
                                </div>
                            </div>
                        </>
                    )
                })
                setApiData(right);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    const [importData, setImportData] = useState(false);

    const onClickHandler = () => {
        setImportData(!importData);
    };

    const [answer, setAnswer] = useState(false);

    const clickResult = () => {
        setAnswer(!answer);
    };

    // const response = apiData.map((user, indexArray) => {
    //     return (
    //         <div
    //             id={user.id}
    //             key={indexArray} >
    //             {user.question}
    //         </div>
    //     )
    // })
    // const result = () => {
    //     for (let i = 0; i < response.length; i++) {
    //         return response[i];
    //     }
    // }

    return (
        <div className={classes.article}>
            <div className={classes.last_q}>
                <div className={classes.questions}>
                    <p>FAQ</p>
                    <p>Questions and Answers on Professional Traffic Permits</p>
                    <div className={classes.line}></div>
                </div>
                <img src={faq} alt="faq" className={classes.faq} />
            </div>
            {/* <div className={classes.rectangle}></div> */}
            <div className={classes.api}>
                <div className={classes.all_q}>
                    <p>What is the lowest country in the world?</p>
                    <div className={classes.min} onClick={clickResult} >
                        <div className={classes.minus} ></div>
                    </div>
                </div>
                {/* <div className={`${classes.none} ${answer && classes.result}`} >Vatican</div> */}
                {answer && <Answers a_1={classes.result} />}
                <div className={classes.all_q}>
                    <p>What is the first name of Bethoven?</p>
                    <div className={classes.min} onClick={clickResult} >
                        <div className={classes.minus} ></div>
                    </div>
                </div>
                {answer && <Answers a_2={classes.result} />}
                {importData && apiData}
                <button className={classes.load} onClick={onClickHandler} >LOAD MORE</button>
            </div>
        </div>

    )
};

export default Article;