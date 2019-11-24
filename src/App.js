import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
