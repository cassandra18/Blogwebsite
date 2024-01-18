import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';


//Im declaring a constant variable 'App' which is a functional component.
// App takes no props and its implimented as an arrow function
const App: React.FC = () => {
    return (
        <Router>
            <Header />
        </Router>
    )
};


export default App;