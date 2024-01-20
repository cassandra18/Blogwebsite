import React from 'react';
import LoginForm from '../components/SignInForm';
import Header from '../components/Header';

const LoginPage: React.FC =() => {
    return (
        <div>
            <Header/>
            <h2>Create Account</h2>
            <LoginForm/>
        </div>
    )
};


export default LoginPage;