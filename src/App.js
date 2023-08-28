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
        <Route path="/service-a" element={<>testt</>}></Route>
      </Routes>
      <Footer />

    </Router>
    </div>
  );
}

export default App;
