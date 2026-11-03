import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import './index.css';
import Beranda from './pages/Beranda';
import Berita from './pages/Berita';

export default function App() {
  return (
    <HashRouter>
      <div id="style1">
        <div id="style2">

         <header>
          <div id="heading">
            <h2><b>KampusHub</b></h2>
            <p><b>Papan Pengumuman UNIWA</b></p>
          </div>
          
          <nav id="nav">
            <NavLink to="/beranda">Beranda |</NavLink>
            <NavLink to="/berita"> Berita |</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/berita" element={<Berita />} />
        </Routes>
        </div>
      </div>
    </HashRouter>
  );

};
