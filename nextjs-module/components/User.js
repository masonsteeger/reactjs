import React from 'react';

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>{`
            div{
                border: 2px solid #ddd;
                box-shadow 0 2px 3px #aaa;
                padding: 20px;
                text-align: center;
            }

        `}</style>
    </div>
);

export default user