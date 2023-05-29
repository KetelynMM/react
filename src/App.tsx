import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
