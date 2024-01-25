import React from "react";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import AllBLogs from "./pages/allBlogs";
import About from "./pages/about";
import Contact from "./pages/contact";
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
