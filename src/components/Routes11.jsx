import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../index.css';
import Home from '../pages/Home';
import resilience from '../pages/resilience';
import restoration from '../pages/restoration';
import conservation from '../pages/conservation';
import sustainable from '../pages/sustainable';
import Openview from '../pages/openview';

const Routes11 = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resilience" element={<resilience />} />
            <Route path="/restoration" element={<restoration />} />
            <Route path="/conservation" element={<conservation />} />
            <Route path="/sustainable" element={<sustainable />} />
            <Route path="/openview" element={<Openview />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Routes11;
