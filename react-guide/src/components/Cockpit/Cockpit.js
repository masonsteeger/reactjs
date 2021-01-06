import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)

    useEffect(() => {
        console.log('[Cockput.js] useEffect');
        //Http request ... 
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleButtonRef.current.click();
        return () => {
            // clearTimeout(timer)
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js cleanup work in 2nd useEffect') 
        };
    });

    const assignedClasses = [];
    let btnClass = [classes.Button];

    if (props.showPersons){
        btnClass.push(classes.Red)
    }

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className = {classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleButtonRef} className={btnClass.join(' ')} onClick={props.clicked}>
                Toggle View Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);