import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{minHeight: "100vh"}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/a" element={<Home/>} />
        <Route path="/b" element={<Home/>} />
        <Route path="/c" element={<Home/>} />
        <Route path="/testimonial" element={<Home/>} />
        <Route path="*" element={<Home/>}></Route>
      </Routes>
      <Footer />

    </Router>
    </div>
  );
}

export default App;
