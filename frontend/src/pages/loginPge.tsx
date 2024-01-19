import React from 'react';
import LoginForm from '../components/SignInForm';
import Header from '../components/Header';

const LoginPage: React.FC =() => {
    return (
        <div>
            <Header/>
        <div>
            <h2>Login Page</h2>
            <LoginForm/>
        </div>
        </div>
    )
};


export default LoginPage;