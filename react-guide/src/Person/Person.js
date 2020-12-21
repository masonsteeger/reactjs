import React from 'react';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 2px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 600px){
        width: 450px;
    }
    `;
    

const person = (props) => {
    const style = {
        '@media (min-width: 600px)' : {
            width: '450px'
        }
    }
    return (
        // <div className='Person' onClick={props.click} style={style}>
        <StyledDiv>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange ={props.changed} value={props.name}/>
        </StyledDiv>
        // </div>
        
    )
}

export default person;