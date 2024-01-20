import React from "react";
import { Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/SignInForm";

//Im declaring a constant variable 'App' which is a functional component.
// App takes no props and its implimented as an arrow function
const App: React.FC = () => {
    return (
    
      <>
        <HomePage/>
        <LoginForm/>
        <Outlet />
      </>
      
    )
};


export default App;