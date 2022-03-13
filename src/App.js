import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import { Home, About, Health, Lifestyle, Contact } from '././pages';
import { useState } from 'react';
function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/health" element={<Health />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
