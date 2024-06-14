import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import HomePage from './HomePage';
import AboutUs from './AboutUs/AboutUs';
import OurTeam from './OurTeam';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<HomePage />} />
        {/* Route for the home page */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourteam" element={<OurTeam />} />

      </Routes>

    </Router>
  );
}

export default App;
