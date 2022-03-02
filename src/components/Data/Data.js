import React from 'react';

// import Child from '../Child/Child';
import classes from './Data.module.css'

const Data = props => {

    // const [apiData, setApiData] = useState([]);

    // useEffect(() => {
    //     fetch('questions.json')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setApiData(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });.
    //         console.log(apiData);
    // });

    return (
        <div className={classes.all_q} >{props.children}</div>
    )
};

export default Data;