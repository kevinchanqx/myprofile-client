import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import Main from './pages/Main';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="home" element={<Home />}/>
          <Route exact path="about-me" element={<Aboutme />}/>
          <Route exact path="education" />
          <Route exact path="career" />
          <Route exact path="contact" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
