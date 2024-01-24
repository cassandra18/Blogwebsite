import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPge";
import AllBLogs from "./pages/AllBLogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
const App: React.FC = () => {
    return (    
      <div className="h-full">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blogs" element={<AllBLogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      
    )
};


export default App;
