import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StylesGlobal from './components/StylesGlobal'
import Bemvindo from './pages/Bemvindo';
import Medidas from './pages/Medidas';
import Admin from "./pages/Admin";
import Mensagens from "./pages/Mensagens";
import Menu from "./components/Menu";


function App() {
  return (
    <Router>
      <StylesGlobal />
      <Menu/>
      <Routes>
        <Route path='/' element = {<Bemvindo/>} />
        <Route path='/medidas' element = {<Medidas/>} />
        <Route path='/administrador' element = {<Admin/>} />
        <Route path='/mensagens' element = {<Mensagens/>} />
      </Routes>
    </Router>
  );
}

export default App;
