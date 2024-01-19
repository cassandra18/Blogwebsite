import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from "./pages/loginPge";


//Im declaring a constant variable 'App' which is a functional component.
// App takes no props and its implimented as an arrow function
const App: React.FC = () => {
    return (
        <Router>
           <Header/>

        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          
        </Routes>
        </Router>
    )
};


export default App;