import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfiniteScroll from './components/InfiniteScroll';
import Carousel from './components/Carousel';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <InfiniteScroll />
            </>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
