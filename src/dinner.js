import React from 'react';

function Dinner(props) {
    return (
        <div>
            <h1>Tomorrow we were serving {props.starter} in starter</h1>
            <h1>Tomorrow we were serving {props.mainCourse} in main course</h1>
            <h1>Tomorrow we were serving {props.dessert} in dessert </h1>
        </div>
    )
}

export default Dinner; 