import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import { Navbar } from './components/Navbar';
import { Comanda } from './pages/Comanda';
import { Produse } from './pages/Produse';
import { Despre } from './pages/Despre'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comanda" element={<Comanda />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produse" element={<Produse />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="*" element={ <h1>Page Not Found</h1> } />
        </Routes>
      </Router>
    </div>

  );//
}

export default App;
