import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return ( 
    <> 
    <div style={{
      backgroundColor:"lightslategrey",
    }}>
      <Router>
        <Header title="MyTodosList" searchBar={true}></Header>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
    </>
  );
}

export default App;
