import React from 'react';

function Dinner(props) {
    return (
        <div>
            <h1>Today we are serving {props.starter} in starter</h1>
            <h1>Today we are serving {props.mainCourse} in main course</h1>
            <h1>Today we are serving {props.dessert} in dessert </h1>
        </div>
    )
}

export default Dinner; 