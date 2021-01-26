import React from 'react';
import User from '../../components/User'
import Link from 'next/link';
import Router from 'next/router';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Page - {props.appName}</h1>
        <User name="Mason" age={26} />
        <hr />
        <p>Go to <Link href="/"><a>Home</a></Link></p>
        <button onClick={() => Router.push('/')}>Go to Home</button>
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App (Auth)'})
        } ,1000)
    });
    return promise
}

export default authIndexPage

