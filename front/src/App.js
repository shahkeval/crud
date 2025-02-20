import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Navbar from './components/Navbar';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/all" element={<Read />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
